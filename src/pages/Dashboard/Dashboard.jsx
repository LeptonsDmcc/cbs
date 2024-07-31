// // import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import UsersCard from '../../components/UsersCard';  // Adjust the import path accordingly
// import CarsCard from '../../components/CarsCard';  // Adjust the import path accordingly

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const bookingsData = {
//     labels: ['9:00am - 11:00am', '11:00am - 1:00pm', '1:00pm - 3:00pm', '3:00pm - 5:00pm'],
//     datasets: [
//       {
//         label: 'Bookings',
//         data: [5, 8, 4, 6], // Example data, replace with actual data
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-8 space-y-6">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6">
//         <p className="text-4xl">Dashboard</p>
//       </div>

//       {/* Approval Requests */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-xl p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-800">Approval Request</h2>
//           <p className="text-sm mb-4 text-gray-800">Trip ID: #1234</p>
//           <div className="flex justify-end space-x-4">
//             <button className="duration-300 bg-black/0 hover:bg-black/25 text-green-400 font-bold py-2 px-4 rounded">Accept</button>
//             <button className="duration-300 bg-black/0 hover:bg-black/25 text-red-600 font-bold py-2 px-4 rounded">Decline</button>
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-xl p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-800">Approval Request</h2>
//           <p className="text-sm mb-4 text-gray-800">Trip ID: #6897</p>
//           <div className="flex justify-end space-x-4">
//             <button className="duration-300 bg-black/0 hover:bg-black/25 text-green-400 font-bold py-2 px-4 rounded">Accept</button>
//             <button className="duration-300 bg-black/0 hover:bg-black/25 text-red-600 font-bold py-2 px-4 rounded">Decline</button>
//           </div>
//         </div>
//       </div>

//       {/* Summaries */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Cars</h2>
//           <p className="text-2xl text-gray-800">8</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Users</h2>
//           <p className="text-2xl text-gray-800">30</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Bookings</h2>
//           <p className="text-2xl text-gray-800">75</p>
//         </div>
//       </div>

//       {/* Users and Cars Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <UsersCard />
//         <CarsCard />
//       </div>

//       {/* Bookings Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Bookings Overview</h2>
//         <Bar data={bookingsData} />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
 // src/pages/Dashboard.js
// import React, { useContext, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import UsersCard from '../../components/UsersCard';  // Adjust the import path accordingly
// import CarsCard from '../../components/CarsCard';  // Adjust the import path accordingly
// import { BookingContext } from '../../context/BookingContext';
// import RequestModal from '../../components/BookingRequestModal';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const { requests } = useContext(BookingContext);
//   const [selectedRequest, setSelectedRequest] = useState(null);

//   const bookingsData = {
//     labels: ['Toyota Corolla', 'Toyota Hilux', 'Peugeot 206', 'Daihatsu HIjet 339', 'Daihatsu HIjet 340','Suzuki Minibus White','Suzuki Minibus Black'],
//     datasets: [
//       {
//         label: 'Bookings',
//         data: [5, 8, 4, 6, 2, 5, 1, 4], // Example data, replace with actual data
//         backgroundColor: 'rgba(168, 207, 69, 1.00)',
//         borderColor: '[rgba(75, 192, 192, 1)]',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-8 space-y-6">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6">
//         <p className="text-4xl">Dashboard</p>
//       </div>

//       {/* Approval Requests */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {requests.map((request, index) => (
//           <div key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-xl p-4">
//             <h2 className="text-lg font-semibold mb-2 text-gray-800">Approval Request</h2>
//             <p className="text-sm mb-4 text-gray-800">Mission: {request.mission}</p>
//             <div className="flex justify-end space-x-4">
//               <button 
//                 className="duration-300 bg-black/0 hover:bg-black/25 text-green-400 font-bold py-2 px-4 rounded"
//                 onClick={() => setSelectedRequest(request)}
//               >
//                 View
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Summaries */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Cars</h2>
//           <p className="text-2xl font-extrabold text-[#a8cf45]">8</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Users</h2>
//           <p className="text-2xl font-extrabold text-[#a8cf45]">30</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Bookings</h2>
//           <p className="text-2xl font-extrabold text-[#a8cf45]">75</p>
//         </div>
//       </div>

//       {/* Users and Cars Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <UsersCard />
//         <CarsCard />
//       </div>

//       {/* Bookings Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Bookings Overview</h2>
//         <Bar data={bookingsData} />
//       </div>

//       <RequestModal request={selectedRequest} onClose={() => setSelectedRequest(null)} />
//     </div>
//   );
// }

// export default Dashboard;

// import { useContext, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import UsersCard from '../../components/UsersCard';  // Adjust the import path accordingly
// import CarsCard from '../../components/CarsCard';  // Adjust the import path accordingly
// import { BookingContext } from '../../context/BookingContext';
// import BookingRequestModal from '../../components/BookingRequestModal';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const { requests } = useContext(BookingContext);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleUpdate = (updatedRequest) => {
//     // Handle the update logic here
//     console.log('Updated Request:', updatedRequest);
//     // Optionally, update the state or make an API call to persist the changes
//   };

//   const bookingsData = {
//     labels: ['Toyota Corolla', 'Toyota Hilux', 'Peugeot 206', 'Daihatsu HIjet 339', 'Daihatsu HIjet 340', 'Suzuki Minibus White', 'Suzuki Minibus Black'],
//     datasets: [
//       {
//         label: 'Bookings',
//         data: [5, 8, 4, 6, 2, 5, 1, 4], // Example data, replace with actual data
//         backgroundColor: 'rgba(168, 207, 69, 1.00)',
//         borderColor: '[rgba(75, 192, 192, 1)]',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-8 space-y-6">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6">
//         <p className="text-4xl">Dashboard</p>
//       </div>

//       {/* Approval Requests */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {requests.map((request, index) => (
//           <div key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-xl p-4">
//             <h2 className="text-lg font-semibold mb-2 text-gray-800">Approval Request</h2>
//             <p className="text-sm mb-4 text-gray-800">Mission: {request.mission}</p>
//             <div className="flex justify-end space-x-4">
//               <button 
//                 className="duration-300 bg-black/0 hover:bg-black/25 text-green-400 font-bold py-2 px-4 rounded"
//                 onClick={() => {
//                   setSelectedRequest(request);
//                   setIsModalOpen(true);
//                 }}
//               >
//                 View
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Summaries */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Cars</h2>
//           <p className="text-2xl font-extrabold text-[#a8cf45]">8</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Users</h2>
//           <p className="text-2xl font-extrabold text-[#a8cf45]">30</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">Bookings</h2>
//           <p className="text-2xl font-extrabold text-[#a8cf45]">75</p>
//         </div>
//       </div>

//       {/* Users and Cars Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <UsersCard />
//         <CarsCard />
//       </div>

//       {/* Bookings Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Bookings Overview</h2>
//         <Bar data={bookingsData} />
//       </div>

//       {selectedRequest && (
//         <BookingRequestModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           bookingRequest={selectedRequest}
//           handleUpdate={handleUpdate}
//         />
//       )}
//     </div>
//   );
// }

// export default Dashboard;

import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import UsersCard from '../../components/UsersCard';  // Adjust the import path accordingly
import CarsCard from '../../components/CarsCard';  // Adjust the import path accordingly
import BookingsCard from '../../components/BookingsCard'; // Import the new component

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [carsCount, setCarsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [tripsCount, setTripsCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const carsResponse = await fetch('/api/v1/vehicles/id');
      const carsData = await carsResponse.json();
      setCarsCount(carsData.count);

      const usersResponse = await fetch('/api/v1/staff/');
      const usersData = await usersResponse.json();
      setUsersCount(usersData.count);

      const tripsResponse = await fetch('/api/v1/trips/');
      const tripsData = await tripsResponse.json();
      setTripsCount(tripsData.results.length);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  const bookingsData = {
    labels: ['Toyota Corolla', 'Toyota Hilux', 'Peugeot 206', 'Daihatsu HIjet 339', 'Daihatsu HIjet 340', 'Suzuki Minibus White', 'Suzuki Minibus Black'],
    datasets: [
      {
        label: 'Bookings',
        data: [5, 8, 4, 6, 2, 5, 1, 4], // Example data, replace with actual data
        backgroundColor: 'rgba(168, 207, 69, 1.00)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-8 space-y-6">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6">
        <p className="text-4xl">Dashboard</p>
      </div>

      {/* Summaries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Cars</h2>
          <p className="text-2xl font-extrabold text-[#a8cf45]">{carsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Users</h2>
          <p className="text-2xl font-extrabold text-[#a8cf45]">{usersCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Trips</h2>
          <p className="text-2xl font-extrabold text-[#a8cf45]">{tripsCount}</p>
        </div>
      </div>
      <div className="grid w-full">
      <BookingsCard /> 
      </div >

      {/* Users, Cars, and Latest Bookings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UsersCard />
        <CarsCard />
        
      </div>

      {/* Bookings Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Bookings Overview</h2>
        <Bar data={bookingsData} />
      </div>
    </div>
  );
};

export default Dashboard;
