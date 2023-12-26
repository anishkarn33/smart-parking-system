import React from 'react';

const bikeSlots = [
  { id: 1, label: 'Bike Slot 1', occupied: true },
  { id: 2, label: 'Bike Slot 2', occupied: false },
  { id: 3, label: 'Bike Slot 3', occupied: true },
  { id: 4, label: 'Bike Slot 4', occupied: true },
  { id: 5, label: 'Bike Slot 5', occupied: false },
  // Add more bike slots as needed
];

export default function Bikeparking() {
  return (
    <div className="flex flex-wrap justify-center">
      {bikeSlots.map((slot) => (
        <div
          key={slot.id}
          className={`m-4 p-4 max-w-xs w-[400px] h-[150px] ${slot.occupied ? 'bg-red-200' : 'bg-green-200'
          } border rounded-lg overflow-hidden`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">{slot.label}</h3>
            {slot.occupied ? (
              <p className="text-red-500">Occupied</p>
            ) : (
              <p className="text-green-500">Vacant</p>
            )}
            {/* Add any other content or components for each bike slot */}
          </div>
        </div>
      ))}
    </div>
  );
}
