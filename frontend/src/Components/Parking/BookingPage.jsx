import React, { useEffect, useState } from "react";
import axios from "axios";
import ParkingSpotCard from "./ParkingSpotCard";
import Navbar from "../Navbar";
import { toast } from "sonner";
import { API_URL } from "../../utils/constants";

const BookingPage = () => {
  const [spots, setSpots] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await axios.get(`${API_URL}/parking_spots`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSpots(response.data);
        toast.success("Spots fetched successfully");
      } catch (error) {
        console.error("Error fetching spots:", error);
        toast.error("You are not authorized to view this page");
      }
    };

    fetchSpots();
  }, [token]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="flex flex-wrap justify-center max-w-7xl">
          {spots.map((spot) => (
            <ParkingSpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
