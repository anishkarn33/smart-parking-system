import React from 'react';

const slots = [
  { id: 1, label: 'Slot 1', occupied: false },
  { id: 2, label: 'Slot 2', occupied: false },
  { id: 3, label: 'Slot 3', occupied: true },
  { id: 4, label: 'Slot 4', occupied: true },
  { id: 5, label: 'Slot 5', occupied: true },
  // Add more slots as needed
];

export default function Carparking() {
  return (
    <div className="flex flex-wrap justify-center ">
      {slots.map((slot) => (
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
            {/* Add any other content or components for each slot */}
          </div>
        </div>
      ))}
    </div>
  );
}
