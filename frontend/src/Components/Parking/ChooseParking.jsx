import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const ChooseBookingPage = () => {
  const history = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center space-y-4 pt-4 justify-center">
      <h2 className="text-2xl font-semibold mb-2">Choose Your Vehicle</h2>

        <div className="flex flex-wrap justify-center max-w-7xl">
          <div
            onClick={() => history("/booking")}
            className={`m-4 p-4 max-w-2xl w-[550px] h-[400px] shadow-2xl hover:bg-blue-100 hover:cursor-pointer bg-blue-50 border rounded-lg overflow-hidden flex justify-center `}
          >
            <div className="flex flex-col justify-center items-center">
              <img src="/car.png" alt="car" className="w-96 h-96" />
              <h3 className="text-2xl font-semibold mb-2">Car Parking</h3>
            </div>
          </div>
          <div
            onClick={() => history("/booking")}
            className={`m-4 p-4 max-w-2xl w-[550px] h-[400px] shadow-2xl hover:bg-blue-100 hover:cursor-pointer bg-blue-50  border rounded-lg overflow-hidden flex justify-center `}
          >
            <div className="flex flex-col justify-center items-center">
              <img src="/bike.png" alt="bike" className="w-96 h-96" />
              <h3 className="text-2xl font-semibold mb-2">Bike Parking</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBookingPage;
