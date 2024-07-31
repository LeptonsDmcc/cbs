import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useTrip from '../../../hooks/useTrip';
import baseURL from '../../../services/apiClient';
import useAuth from '../../../hooks/auth/store';

const BookingRequests = () => {
  const { tripId } = useParams();
  const { data: trip, isLoading } = useTrip(tripId);
  const { user } = useAuth();
  const [currentTrip, setCurrentTrip] = useState(null);

  const handleAdminAction = async (action) => {
    await fetch(`${baseURL}/api/v1/trips/${tripId}/status/`, {
        body: JSON.stringify({
            status:action
        }),
        headers: {
            "Authorization": `Bearer ${user.access}`,
            "Content-Type": "application/json"
        },
        method:"PATCH",
    })
  };

  if (isLoading) return <p>Loading...</p>;
  if (!trip) return <p>No trip details available.</p>;

  return (
    <div className="p-8 min-h-screen">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
        <h2 className="text-4xl">Trip Details</h2>
      </div>
      <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Trip Information</h3>
        <div className="mb-4">
          <strong>Car:</strong> {trip.vehicle}
        </div>
        <div className="mb-4">
          <strong>User:</strong> {trip.staff}
        </div>
        <div className="mb-4">
          <strong>Destinations:</strong>
          <ul>
            {trip.destinations && trip.destinations.map((destination, index) => (
              <li key={index} className="mb-2">
                <div><strong>Address:</strong> {destination.address}</div>
                <div><strong>Mission:</strong> {destination.mission}</div>
                <div><strong>Visit Duration:</strong> {destination.visit_duration}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <strong>Duration:</strong> {trip.start_time} - {trip.end_time}
        </div>
        <div className="mb-4">
          <strong>Date:</strong> {trip.date}
        </div>
        <div className="mb-4">
          <strong>Check-out Time:</strong> {trip.check_out}
        </div>
        <div className="mb-4">
          <strong>Check-in Time:</strong> {trip.check_in}
        </div>
        <div className="mb-4">
          <strong>Status:</strong> {trip.status}
        </div>
        <div className="mt-4 flex justify-around">
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => handleAdminAction('approved')}
          >
            Approve
          </button>
          <button 
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => handleAdminAction('pending')}
          >
            Pending
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => handleAdminAction('cancelled')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingRequests;
