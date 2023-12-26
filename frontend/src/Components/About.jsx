import React from "react";
import Navbar from "./Navbar";
function AboutPage() {
  return (
    <div>
      <Navbar />
      <div
        className=" min-h-screen bg-cover bg-no-repeat h-screen flex opacity-[2] relative "
        style={{ backgroundImage: `url(/about.jpg)` }}
      >
        <div className="p-20 lg:w-50  md:w-full realtive ">
          <h1 className="text-white title-font font-bold mb-5 text-3xl relative left-[10px] top-6">
            SMART PARKING SYSTEM
          </h1>
          <div className="flex rounded-lg  border-opacity-60 p-20 sm:flex-row flex-col  ">
            <div className="flex-grow relative flex-1 left-[-455px] right-8">
              <h2 className="text-blue-600 title-font font-bold mb-5 text-3xl ]">
                About Application
              </h2>
              <p className="leading-relaxed text-black-250 text-bold relative top-[20px] font-bold mb-5 text-2xl relative left-[350px]">
                At the heart of our mission is the vision of a future where
                parking is no longer a hassle,
                <p> but a seamless and stress-free experience.</p> We strive to
                create intelligent parking solutions that not only optimize
                space utilization{" "}
                <p>but also enhance the overall urban mobility experience.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
