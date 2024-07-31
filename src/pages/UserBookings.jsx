// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoArrowBackCircleOutline } from 'react-icons/io5';
// import useUserTrips from '../hooks/useUserTrips';
// import useAuth from '../hooks/auth/store';
// import baseURL from '../services/apiClient';

// const UserBookings = () => {
//   const navigate = useNavigate();
//   const [bookings, setBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { user } = useAuth(); 
//   const { data } = useUserTrips(user.id);

//   useEffect(() => {
//     // Fetch the user's bookings from an API or state
//     // This is just a placeholder, replace it with actual data fetching logic
//     const fetchBookings = async () => {
//       setIsLoading(true);
//       try {
//         // Replace with actual API call
//         const response = await fetch('/api/v1/trips');
//         const data = await response.json();
//         setBookings(data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     console.log("DATA", data);

//     fetchBookings();
//   }, []);

//   const handleBackClick = () => {
//     navigate(-1); // Navigate back to the previous page
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       {/* Back Button */}
//       <button
//         onClick={handleBackClick}
//         className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
//       >
//         <IoArrowBackCircleOutline />
//       </button>

//       {/* Header */}
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold px-6 mb-6 rounded-lg">
//         <p className="text-4xl">My Bookings</p>
//       </div>

//       {/* Main Content */}
//       <div className="overflow-x-auto px-8 lg:px-20">
//         <table className="w-full bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-[#a8cf45] h-[50px] text-left text-gray-700 uppercase text-sm">
//               <th className="pl-6">Car</th>
//               <th>Destination</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && data.results && data.results.map((booking) => (
//               <tr key={booking.id} className="bg-gray-100 h-[65px] text-gray-700 border-b">
//                 <td className="pl-6">
//                 <VehicleImage vehicleId={booking.vehicle} />
//                 </td>
//                 <td>{booking.destinations[0].address}</td>
//                 <td>{booking.start_time} - {booking.end_time}</td>
//                 <td>{booking.date}</td>
//                 <td>
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       booking.status === 'approved'
//                         ? 'bg-green-500'
//                         : booking.status === 'not approved'
//                         ? 'bg-red-500'
//                         : 'bg-yellow-500'
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserBookings;
// const VehicleImage = ({ vehicleId }) => {
//   const [vehicle, setVehicle] = useState();
//   useEffect(() => {
//     const fetchVehicle = async () => {
//       const response = await fetch(`${baseURL}/api/v1/vehicles/${vehicleId}/`);
//       const vehicleData = await response.json();
//       setVehicle(vehicleData);
//     };
//     fetchVehicle();
//   }, [vehicleId]);

//   return (
//     <td className="pl-6">
//       {vehicle && <img src={vehicle.image} alt="" className="h-[60px] object-cover rounded-lg" />}
//     </td>
//   );
// };

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import useUserTrips from '../hooks/useUserTrips';
import useAuth from '../hooks/auth/store';
import baseURL from '../services/apiClient';

const UserBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth(); 
  const { data } = useUserTrips(user.id);

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/v1/trips');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-[100px]">
        <FaSpinner className="animate-spin text-gray-800 text-4xl" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-100 p-6 m-16">

      {/* Header */}
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold px-6 mb-6 rounded-lg">
        <p className="text-4xl">My Bookings</p>
      </div>

      {/* Main Content */}
      <div className="overflow-x-auto px-4 lg:px-20">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#a8cf45] h-[50px] text-left text-gray-700 uppercase text-sm">
              <th className="pl-6">Car</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.results && data.results.map((booking) => (
              <tr key={booking.id} className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-200 transition duration-200">
                <td className="pl-6">
                  <VehicleImage vehicleId={booking.vehicle} />
                </td>
                <td>{booking.destinations[0].address}</td>
                <td>{booking.start_time} - {booking.end_time}</td>
                <td>{booking.date}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      booking.status === 'approved'
                        ? 'bg-green-500'
                        : booking.status === 'not approved'
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookings;

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
    <div className="pl-6">
      {vehicle && <img src={vehicle.image} alt="" className="h-[60px] object-cover rounded-lg" />}
    </div>
  );
};
