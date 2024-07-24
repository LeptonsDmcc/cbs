import React, { useState, useEffect } from 'react';

const BookingRequestModal = ({ isOpen, onClose, bookingRequest, handleUpdate }) => {
  const [status, setStatus] = useState(bookingRequest?.status || '');

  useEffect(() => {
    if (bookingRequest) {
      setStatus(bookingRequest.status);
    }
  }, [bookingRequest]);

  const handleSubmit = () => {
    handleUpdate({ ...bookingRequest, status });
  };

  if (!isOpen || !bookingRequest) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Booking Request</h2>
        <p>Mission: {bookingRequest.mission}</p>
        <p>Date: {bookingRequest.date}</p>
        <p>Vehicle: {bookingRequest.vehicle}</p>

        <div className="mt-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Update
          </button>
          <button
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestModal;

