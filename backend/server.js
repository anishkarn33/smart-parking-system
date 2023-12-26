const express = require("express");
const { Board, Sensor } = require("johnny-five");
var SerialPort = require("serialport").SerialPort;
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const knex = require("knex")(require("./knexfile").development);

const app = express();

// Arduino board configuration--------------------------------------------------
const board = new Board({
  // port: new SerialPort({
  //   baudRate: 9600,
  // }),
});

board.on("ready", () => {
  console.log("Board ready!");

  const ingate = new Sensor.Digital(6); // Digital IR sensor for ingate
  const outgate = new Sensor.Digital(7);

  let lock = false; // Lock to prevent multiple triggers

  // Monitor the outgate sensor
  outgate.on("change", function () {
    if (this.value === 0) {
      console.log("Outgate sensor triggered");
      // Assuming 0 means the IR sensor is triggered
      toggleParkingSpot(1);
      lock = true;
    } else {
      console.log("Outgate sensor high");
      if (!lock) {
        toggleParkingSpot(1);
      }
      lock = false;
    }
  });

  // board.io.on("data", (data) => {
  //   const message = data.toString().trim();
  //   if (message === "ingate" || message === "outgate") {
  //     toggleParkingSpot(1); // Toggle the status for spot ID 1
  //   }
  // });
});
// -----------------------------------------------------------------------------

// Function for updating the parking spot status in the database
async function updateParkingSpotStatus(id, status) {
  console.log(`Updating parking spot ${id} to ${status}`);
  await knex("parking_spot").where({ id }).update({ status });
}

// Function to toggle the parking spot status
async function toggleParkingSpot(id) {
  const spot = await knex("parking_spot").where({ id }).first();
  const newStatus = spot.status === "vacant" ? "occupied" : "vacant";
  updateParkingSpotStatus(id, newStatus);
}

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Middleware to validate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.SECRET_KEY ||
      "721f34d2ba0ceb4ae10d1c5483ca460e7631d4c3eff4721532cf05d53cb41558",
    (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};

// ROUTE CONTROLLERS------------------------------------------------------------

// Register User
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  // Insert user into the database
  const [userId] = await knex("user").insert({
    username,
    name: username,
    password: hashedPassword,
  });
  res.json({ id: userId, username });
});

// Login User
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await knex("user").where({ username }).first();
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { userId: user.id },
      process.env.SECRET_KEY ||
        "721f34d2ba0ceb4ae10d1c5483ca460e7631d4c3eff4721532cf05d53cb41558",
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// List all parking spots
app.get("/parking_spots", async (req, res) => {
  // also join with parking_spot_occupancy table to get the current occupancy (latest end_datetime is null and higher id)
  const spots = await knex("parking_spot").select("*");
  res.json(spots);
});

// Book a parking spot
app.post("/book_spot", authenticateToken, async (req, res) => {
  const { spotId } = req.body;
  const userId = req.user.userId;
  const spot = await knex("parking_spot").where({ id: spotId }).first();
  if (spot.status === "vacant") {
    await knex.transaction(async (trx) => {
      await trx("parking_spot")
        .where({ id: spotId })
        .update({ status: "occupied" });
      await trx("parking_spot_occupancy").insert({
        parking_spot_id: spotId,
        user_id: userId,
        start_datetime: new Date(),
      });
    });
    res.send("Spot booked successfully");
  } else {
    res.status(400).send("Spot is already occupied");
  }
});

// Release a parking spot
app.post("/release_spot", authenticateToken, async (req, res) => {
  const { spotId } = req.body;
  await knex("parking_spot").where({ id: spotId }).update({ status: "vacant" });
  await knex("parking_spot_occupancy")
    .where({ parking_spot_id: spotId })
    .andWhere("end_datetime", null)
    .update({ end_datetime: new Date() });
  res.send("Spot released successfully");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
