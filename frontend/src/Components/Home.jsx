import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const targetText = 'Reserve your spot now!';

  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= targetText.length; i++) {
        setTimeout(() => {
          setTypedText(targetText.slice(0, i));
          if (i === targetText.length) {
            setTimeout(() => {
              setTypedText('');
              typeText();
            }, 1000); // Adjust the delay before starting again
          }
        }, i * 140); // Adjust the speed of typing (increase or decrease the delay)
      }
    };

    typeText();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-no-repeat h-screen flex"
        style={{ backgroundImage: `url(/homecar.jpg)` }}
      >
        <div className="w-1/2 p-10 relative top-[200px] left-[400px]">
          <h1 className="text-5xl font-bold text-white   mb-4">
            Welcome to Smart Parking System!
          </h1>
          <p className="text-red-300 font-bold ml-12 text-2xl relative bottom-[-80px]">{typedText}</p>
        </div>
        <div className="w-1/2">
          {/* Add any other content or components here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
