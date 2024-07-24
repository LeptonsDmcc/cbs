import React from 'react';

const AcceptedBookingModal = ({ isOpen, onClose, trip, handleAddTrip }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Booking Accepted</h2>
        <p><strong>Mission:</strong> {trip.mission}</p>
        <p><strong>Date:</strong> {trip.date}</p>
        <p><strong>Start Time:</strong> {trip.start_time}</p>
        <p><strong>End Time:</strong> {trip.end_time}</p>
        <p><strong>Vehicle:</strong> {trip.vehicle}</p>

        <div className="mt-4 flex justify-end space-x-4">
          <button onClick={handleAddTrip} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add Trip
          </button>
          <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptedBookingModal;