// import React from 'react';
import { useState } from 'react';

const BookingModal = ({ isOpen, onClose, bookingDetails, onStartTrip, onEndTrip }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg p-6 z-10 w-full max-w-lg mx-4">
                <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                <div className="mb-4">
                    <p><strong>Car Selected:</strong> {bookingDetails.car}</p>
                    <p><strong>Location:</strong> {bookingDetails.location}</p>
                    <p><strong>Mission:</strong> {bookingDetails.mission}</p>
                    <p><strong>Start Time:</strong> {bookingDetails.startTime}</p>
                    <p><strong>End Time:</strong> {bookingDetails.endTime}</p>
                </div>
                <div className="flex justify-end gap-4">
                    <button onClick={onStartTrip} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Start Trip</button>
                    <button onClick={onEndTrip} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">End Trip</button>
                    <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Close</button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
