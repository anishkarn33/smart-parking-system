import React from 'react';
import { Link } from 'react-router-dom';
import carImage from "./car.png";
import Bike from "./bike.png";

function Parking() {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/2 md:w-full">
          <div className="flex rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col border-2">
            <div className="flex-grow">
              <Link to="/carparking">
                <img
                  src={carImage}
                  alt="Car"
                  className="w-full h-full rounded-full hover hover:bg-slate-300 transition-transform duration-300 transform hover:scale-105"
                />
              </Link>
              <h2 className="text-gray-900 title-font font-bold mb-3 text-3xl">
                Cars
              </h2>
              <p className="leading-relaxed text-base">
                Smartly park your car according to the system
              </p>
              <Link to="/carparking" className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 md:w-full">
          <div className="flex rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className="flex-grow">
              <Link to="/bikeparking">
                <img
                  src={Bike}
                  alt="Bike"
                  className="w-full h-1/2 rounded-full hover hover:bg-slate-300 transition-transform duration-300 transform hover:scale-105"
                />
              </Link>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Bikes
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <Link to="/bikepage" className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parking;
