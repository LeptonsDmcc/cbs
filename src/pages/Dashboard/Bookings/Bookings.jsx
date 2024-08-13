// import React from 'react';
// import { IoCarSport } from 'react-icons/io5';
// import { FaUser } from 'react-icons/fa';
// import { FaLocationCrosshairs } from 'react-icons/fa6';
// import { IoTimer } from 'react-icons/io5';
// import { MdDateRange } from 'react-icons/md';
// import useVehicles from '../../hooks/useVehicles';

// const Bookings = () => {
//   const { data, isLoading } = useVehicles();

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="p-8">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Bookings Log</h2>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//               <th className="pl-6"><IoCarSport className="inline mr-1" /><span>Car</span></th>
//               <th><FaUser className="inline mr-1" /><span>User</span></th>
//               <th><FaLocationCrosshairs className="inline mr-1" /><span>Destination</span></th>
//               <th><IoTimer className="inline mr-1" /><span>Duration</span></th>
//               <th className="pr-6"><MdDateRange className="inline mr-1" /><span>Date</span></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data &&
//               data.results.map((v) => (
//                 <tr key={v} className="bg-gray-100 h-[65px] text-gray-700 border-b">
//                   <td className="pl-6">
//                     {v.image && <img src={v.image} alt="" className="h-[60px] rounded-lg" />}
//                   </td>
//                   <td>
//                     Amina Badamasi
//                     <br />
//                     <div className="text-gray-400">Admin</div>
//                   </td>
//                   <td>Wuse</td>
//                   <td>10:00am-12:00pm</td>
//                   <td className="text-gray-400">30 April 2024</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Bookings;
// import React from 'react';
// import React from 'react';
// import { IoCarSport } from 'react-icons/io5';
// import { FaUser } from 'react-icons/fa';
// import { FaLocationCrosshairs } from 'react-icons/fa6';
// import { IoTimer } from 'react-icons/io5';
// import { MdDateRange } from 'react-icons/md';
// import useTrips from '../../hooks/useTrips';
// import baseURL from '../../services/apiClient';
// import { useEffect, useState } from 'react';

// const Bookings = () => {
//   const { data, isLoading } = useTrips();

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="p-8 min-h-screen">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Bookings Log</h2>
//       </div>
//       <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//                 <th className="pl-6"><IoCarSport className="inline mr-1" /><span>Car</span></th>
//                 <th><FaUser className="inline mr-1" /><span>User</span></th>
//                 <th><FaLocationCrosshairs className="inline mr-1" /><span>Destination</span></th>
//                 <th><IoTimer className="inline mr-1" /><span>Duration</span></th>
//                 <th className="pr-6"><MdDateRange className="inline mr-1" /><span>Date</span></th>
//               </tr>
//             </thead>
//             <tbody>
//               {data &&
//                 data.results.map( (trips) => {

 

//                   return (
//                     <tr key={trips.url} className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors">
//                       <VehicleImage vehicleId ={trips.vehicle}/>
//                       <td>
//                       {(trips.staff).split('-')[4].toUpperCase()}
//                         <br />
//                         <div className="text-gray-400">{trips.department}</div>
//                       </td>
//                       <td>{trips.destinations[0].address}</td>
//                       <td className="text-gray-400">{trips.start_time} - {trips.end_time}</td>
//                       <td className="text-gray-400">{trips.date}</td>
//                     </tr>
//                   )
//                 })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bookings;

// const VehicleImage = (props) => {
//   const [vehicle, setVehicle] = useState();
//   useEffect(() => {
//     const vehicleFn = async () => {
//       const vRes = await fetch(`${baseURL}/api/v1/vehicles/${props.vehicleId}/`);
//       const v = await vRes.json();
//       setVehicle(v)
//       console.log("VEHICLES", v)
//     };
//     vehicleFn();
//   },[props.vehicleId]);
  
  
//   return <td className="pl-6">{vehicle && <img src={vehicle.image} alt="" 
//   className="h-[60px] object-cover rounded-lg" />}
//   </td>
// }

// import { IoCarSport } from 'react-icons/io5';
// import { FaUser } from 'react-icons/fa';
// import { FaLocationCrosshairs } from 'react-icons/fa6';
// import { IoTimer } from 'react-icons/io5';
// import { MdDateRange } from 'react-icons/md';
// import { useEffect, useState } from 'react';
// import useTrips from '../../hooks/useTrips';
// import baseURL from '../../services/apiClient';

// const Bookings = () => {
//   const { data, isLoading } = useTrips();
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tripsPerPage] = useState(10); // Adjust the number of trips per page as needed
//   const [selectedTrip, setSelectedTrip] = useState(null);

//   if (isLoading) return <p>Loading...</p>;
//   if (!data || !data.results) return <p>No data available.</p>;

//   // Filter and search logic
//   const filteredTrips = data.results.filter((trip) => {
//     return (
//       trip.staff.toLowerCase().includes(search.toLowerCase()) &&
//       (filter === 'all' || trip.status === filter)
//     );
//   });

//   // Pagination logic
//   const indexOfLastTrip = currentPage * tripsPerPage;
//   const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
//   const currentTrips = filteredTrips.slice(indexOfFirstTrip, indexOfLastTrip);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleTripClick = (trip) => {
//     setSelectedTrip(trip);
//   };

//   const handleAdminAction = (action) => {
//     // Implement the logic for handling admin actions (accept, reject, pending)
//     console.log(`Admin action: ${action} for trip:`, selectedTrip);
//     // Reset selected trip after action
//     setSelectedTrip(null);
//   };

//   return (
//     <div className="p-8 min-h-screen">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Bookings Log</h2>
//         <div>Status: <span className="font-bold">{data.status}</span></div>
//       </div>
//       <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
//         <div className="mb-4 flex justify-between">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             className="p-2 border rounded-lg" 
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <select 
//             className="p-2 border rounded-lg" 
//             value={filter} 
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <option value="all">All</option>
//             <option value="pending">Pending</option>
//             <option value="accepted">Accepted</option>
//             <option value="rejected">Rejected</option>
//           </select>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//                 <th className="pl-6"><IoCarSport className="inline mr-1" /><span>Car</span></th>
//                 <th><FaUser className="inline mr-1" /><span>User</span></th>
//                 <th><FaLocationCrosshairs className="inline mr-1" /><span>Destination</span></th>
//                 <th><IoTimer className="inline mr-1" /><span>Duration</span></th>
//                 <th><MdDateRange className="inline mr-1" /><span>Date</span></th>
//                 <th><span>Status</span></th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentTrips.map((trip) => (
//                 <tr 
//                   key={trip.url} 
//                   className={`bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors cursor-pointer ${selectedTrip === trip ? 'bg-gray-200' : ''}`}
//                   onClick={() => handleTripClick(trip)}
//                 >
//                   <VehicleImage vehicleId={trip.vehicle} />
//                   <td>
//                     {trip.staff.split('-')[4].toUpperCase()}
//                     <br />
//                     <div className="text-gray-400">{trip.department}</div>
//                   </td>
//                   <td>{trip.destinations[0].address}</td>
//                   <td className="text-gray-400">{trip.start_time} - {trip.end_time}</td>
//                   <td className="text-gray-400">{trip.date}</td>
//                   <td className="text-gray-400">{trip.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <Pagination
//             tripsPerPage={tripsPerPage}
//             totalTrips={filteredTrips.length}
//             paginate={handlePageChange}
//           />
//         </div>
//         {selectedTrip && (
//           <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-2">Manage Trip</h3>
//             <div className="flex justify-around">
//               <button 
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg"
//                 onClick={() => handleAdminAction('accept')}
//               >
//                 Accept
//               </button>
//               <button 
//                 className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
//                 onClick={() => handleAdminAction('pending')}
//               >
//                 Pending
//               </button>
//               <button 
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg"
//                 onClick={() => handleAdminAction('reject')}
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Pagination = ({ tripsPerPage, totalTrips, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalTrips / tripsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="mt-4">
//       <ul className="flex justify-center">
//         {pageNumbers.map((number) => (
//           <li key={number} className="px-3 py-1 mx-1 border rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300">
//             <a onClick={() => paginate(number)}>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Bookings;

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

// const DashboardCard = ({ latestTrips }) => {
//   return (
//     <div className="p-4 shadow-lg bg-white rounded-lg">
//       <h3 className="text-xl font-semibold mb-4">Latest Trip Requests</h3>
//       <ul>
//         {latestTrips.map((trip) => (
//           <li key={trip.url} className="mb-2">
//             <div>{trip.staff.split('-')[4].toUpperCase()} - {trip.destinations[0].address}</div>
//             <div className="text-gray-400">{trip.date}</div>
//           </li>
//         ))}
//       </ul>
//       <a href="/bookings" className="text-blue-500 hover:underline mt-4 inline-block">View More</a>
//     </div>
//   );
// };

import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { IoCarSport } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { IoTimer } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { useEffect, useState } from 'react';
import useTrips from '../../../hooks/useTrips';
import baseURL from '../../../services/apiClient';
import useAuth from '../../../hooks/auth/store';

const Bookings = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useTrips(searchParams.get("page"));

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [tripsPerPage] = useState(10); // Adjust the number of trips per page as needed
  const navigate = useNavigate();

  useEffect(() => {}, [searchParams]);

  if (isLoading) return <p>Loading...</p>;
  if (!data || !data.results) return <p>No data available.</p>;

  // Sort by date (assuming trip.date is in a standard date format)
  const sortedTrips = data.results.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter and search logic
  const filteredTrips = sortedTrips.filter((trip) => {
    return (
      trip.staff.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'all' || trip.status === filter)
    );
  });

  // Pagination logic
  const indexOfLastTrip = currentPage * tripsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
  const currentTrips = filteredTrips.slice(indexOfFirstTrip, indexOfLastTrip);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTripClick = (trip) => {
    navigate(`/admin/bookings/${trip.id}`);
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
        <h2 className="text-4xl">Bookings Log</h2>
        <div><span className="font-bold">{data.status}</span></div>
      </div>
      <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
        <div className="mb-4 flex justify-between">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 border rounded-lg" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            className="p-2 border rounded-lg" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
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
              {currentTrips.map((trip) => (
                <tr 
                  key={trip.url} 
                  className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleTripClick(trip)}
                >
                  <VehicleImage vehicleId={trip.vehicle} />
                  <td>
                    <StaffName staffId={trip.staff} />
                    
                    
                  </td>
                  <td>{trip.destinations[0].address}</td>
                  <td className="text-gray-400">{trip.start_time} - {trip.end_time}</td>
                  <td className="text-gray-400">{trip.date}</td>
                  <td className="text-gray-400">{trip.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            tripsPerPage={tripsPerPage}
            totalTrips={data.count}
            paginate={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ tripsPerPage, totalTrips, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTrips / tripsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="px-3 py-1 mx-1 border rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300">
            <Link
              to={`?page=${number}`}
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Bookings;

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

const StaffName = ({ staffId }) => {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(`${baseURL}/api/v1/manage/staff/${staffId}/`, {
          headers: {
            "Authorization": `Bearer ${user.access}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch staff');
        }
        const staffData = await response.json();
        setStaff(staffData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (staffId) {
      fetchStaff();
    }
  }, [staffId, user.access]);

  if (loading) {
    return <td>Loading...</td>;
  }

  if (error) {
    return <td>Error loading staff</td>;
  }

  return <td>{staff ? staff.first_name : 'No staff'}</td>;
};

