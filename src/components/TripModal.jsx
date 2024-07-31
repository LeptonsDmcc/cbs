// src/components/TripModal.js
import React from 'react';

const TripModal = ({ isOpen, onClose, trip, onStartTrip, onEndTrip, onAddTrip }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-1/4 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-3 text-center">
          <h3 className="text-2xl font-bold">Booking Approved</h3>
          <p className="mt-2">Trip Details:</p>
          <ul className="text-left mt-4">
            <li><strong>Car:</strong> {trip.vehicle}</li>
            <li><strong>User:</strong> {trip.staff}</li>
            <li><strong>Date:</strong> {trip.date}</li>
            <li><strong>Duration:</strong> {trip.start_time} - {trip.end_time}</li>
            <li><strong>Status:</strong> {trip.status}</li>
          </ul>
          <div className="mt-4 flex justify-around">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={onStartTrip}>Start Trip</button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg" onClick={onEndTrip}>End Trip</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={onAddTrip}>Add Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripModal;
