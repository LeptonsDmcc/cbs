import { useEffect, useState } from 'react';
import { IoCarSport } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { IoTimer } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import baseURL from '../services/apiClient';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LatestBookingsCard = () => {
  const [latestBookings, setLatestBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLatestBookings();
  }, []);

  const fetchLatestBookings = async () => {
    try {
      const response = await fetch(`${baseURL}/api/v1/trips/?limit=1000&ordering=-date`);
      const data = await response.json();
      const today = new Date().toISOString().split('T')[0];
      const todayBookings = data.results.filter(booking => booking.date === today).slice(0, 2); // Ensure only the first 2 results are set
      setLatestBookings(todayBookings);
    } catch (error) {
      console.error('Error fetching latest bookings:', error);
    }
  };

  const handleTripClick = (tripId) => {
    navigate(`/admin/bookings/${tripId}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Latest Booking Requests</h2>
      {latestBookings.length === 0 ? (
        <p>No recent booking requests.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
                <th className="pl-6"><IoCarSport className="inline mr-1" /><span>Car</span></th>
                <th><FaUser className="inline mr-1" /><span>User</span></th>
                <th><FaLocationCrosshairs className="inline mr-1" /><span>Destination</span></th>
                <th><IoTimer className="inline mr-1" /><span>Duration</span></th>
                <th><MdDateRange className="inline mr-1" /><span>Date</span></th>
                <th><span>Status</span></th>
              </tr>
            </thead>
            <tbody>
              {latestBookings.map((booking) => (
                <tr 
                  key={booking.id} 
                  className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleTripClick(booking.id)}
                >
                  <VehicleImage vehicleId={booking.vehicle} />
                  <td>
                    {booking.staff.split('-')[4].toUpperCase()}
                    <br />
                    <div className="text-gray-400">{booking.department}</div>
                  </td>
                  <td>{booking.destinations[0].address}</td>
                  <td className="text-gray-400">{booking.start_time} - {booking.end_time}</td>
                  <td className="text-gray-400">{booking.date}</td>
                  <td className="text-gray-400">{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link
        to="/admin/bookings"
        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
      >
        View All Request
      </Link>
    </div>
  );
};

export default LatestBookingsCard;

const VehicleImage = ({ vehicleId }) => {
  const [vehicle, setVehicle] = useState();
  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await fetch(`${baseURL}/api/v1/vehicles/${vehicleId}/`);
      const vehicleData = await response.json();
      setVehicle(vehicleData);
    };
    fetchVehicle();
  }, [vehicleId]);

  return (
    <td className="pl-6">
      {vehicle && <img src={vehicle.image} alt="" className="h-[60px] object-cover rounded-lg" />}
    </td>
  );
};
