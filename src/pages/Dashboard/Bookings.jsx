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
import { IoCarSport } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { IoTimer } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import useTrips from '../../hooks/useTrips';

const Bookings = () => {
  const { data, isLoading } = useTrips();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-8 min-h-screen">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
        <h2 className="text-4xl">Bookings Log</h2>
      </div>
      <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
                <th className="pl-6"><IoCarSport className="inline mr-1" /><span>Car</span></th>
                <th><FaUser className="inline mr-1" /><span>User</span></th>
                <th><FaLocationCrosshairs className="inline mr-1" /><span>Destination</span></th>
                <th><IoTimer className="inline mr-1" /><span>Duration</span></th>
                <th className="pr-6"><MdDateRange className="inline mr-1" /><span>Date</span></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.results.map((trips) => (
                  <tr key={trips.url} className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors">
                    <td className="pl-6">
                      {trips.vehicle && <img src={trips.vehicle_image} alt="" className="h-[60px] object-cover rounded-lg" />}
                    </td>
                    <td>
                    {(trips.staff).split('-')[4].toUpperCase()}
                      <br />
                      <div className="text-gray-400">{trips.department}</div>
                    </td>
                    <td>{trips.destinations.address}</td>
                    <td className="text-gray-400">{trips.start_time} - {trips.end_time}</td>
                    <td className="text-gray-400">{trips.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;


