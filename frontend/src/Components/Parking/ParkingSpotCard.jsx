import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { API_URL } from "../../utils/constants";

const ParkingSpotCard = ({ spot }) => {
  const token = localStorage.getItem("token");

  const handleBook = async () => {
    try {
      await axios.post(
        `${API_URL}/book_spot`,
        { spotId: spot.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Spot booked successfully");
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Booking failed");
    }
  };

  const handleRelease = async () => {
    try {
      await axios.post(
        `${API_URL}/release_spot`,
        { spotId: spot.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Spot released successfully");
    } catch (error) {
      console.error("Release failed:", error);
      toast.error("Release failed");
    }
  };

  // <h3>{spot.name}</h3>
  // <p>Status: {spot.status}</p>
  // {spot.status === "vacant" && <button onClick={handleBook}>Book</button>}
  // {spot.status === "occupied" && (
  //   <button onClick={handleRelease}>Release</button>
  // )}
  // {spot.status === "occupied" && (
  //   <p>Time Elapsed: </p>
  // )}
  return (
    <div
      key={spot.id}
      className={`m-4 p-4 max-w-xs w-[400px] h-[150px] ${
        spot.status === "occupied" ? "bg-red-200" : "bg-green-200"
      } border rounded-lg overflow-hidden flex justify-center `}
    >
      <div className="">
        <h3 className="text-lg font-semibold mb-2">{spot.name}</h3>
        {spot.status === "occupied" ? (
          <p className="text-red-500">Booked</p>
        ) : (
          <p className="text-green-500">Available</p>
        )}
        {/* {spot.status === "vacant" && <button 
        onClick={handleBook}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
        >Book</button>} */}
      </div>
    </div>
  );
};

export default ParkingSpotCard;
