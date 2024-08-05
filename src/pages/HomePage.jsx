// // import React from 'react';
// import peugeot from "../assets/images/peugeot.png";
// import { useState } from "react";
// import useVehicles from "../hooks/useVehicles";
// import { useForm } from "react-hook-form";
// import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
// import getIDFromUrl from '../lib/getIDFromUrl';

// const HomePage = () => {
//     const { data, isLoading } = useVehicles();
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [results, setResults] = useState();
//     const { handleSubmit, register } = useForm();

//     const places = (place) => {
//         console.log("our", place);
//         var requestOptions = {
//             method: 'GET',
//         };
//         console.log("WE ARE HERE");
//         fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${place || "nigeria"}&apiKey=77a6a0616fbd4d22ae652b352b03f67b`, requestOptions)
//             .then(response => response.json())
//             .then(result => { console.log("our results", result); setResults(result); })
//             .catch(error => console.log('error', error));
//     };

//     const onSubmit = (data) => {
//         console.log("DATA", data);

//         const newData = {
//             "mission": data.mission,
//             "start_time": data.start_time,
//             "end_time": data.end_time,
//             "staff": "8411e89a-4a72-42eb-abc5-29de2890cae5",
//             "vehicle": data.vehicle
//         };
//     };

//     if (isLoading) return <p>Loading...</p>;
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="flex justify-center gap-x-[80px] px-5 mt-24 text-bold ">
//                 <ul className='font-bold mx-8'>
//                     {data && data.results && data.results.map((vehicle, index) => {
//                         return (
//                             <li onClick={() => setActiveIndex(index)} key={vehicle.id}>
//                                 <label className={`${activeIndex === index ? "bg-[#a8cf45] text-gray-800" : ""} block min-w-[255px] my-1 p-4 cursor-pointer hover:bg-[#a8cf45] text-gray-500 border py-3 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800`} htmlFor={vehicle.url}>
//                                     {vehicle.make + " " + vehicle.model}
//                                     <input hidden type="radio" value={getIDFromUrl(vehicle.url)} name="vehicle" id={vehicle.url} {...register("vehicle")} />
//                                 </label>
//                             </li>
//                         );
//                     })}
//                 </ul>

//                 <div className="w-1/2">
//                     {data && data && <img src={data.results[activeIndex].image || peugeot} alt="" className="w-full" />}
//                 </div>

//                 <ul className='font-bold mx-8'>
//                     <li className="min-w-[255px] bg-[#a8cf45] p-4 text-center">
//                         Car Details
//                     </li>

//                     <table className="min-w-full bg-white rounded-lg shadow-md">
//                         <tbody>
//                             <tr className="bg-gray-50 border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">MAKE</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].make : '...'}</td>
//                             </tr>
//                             <tr className="bg-white border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">MODEL</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].model : '...'}</td>
//                             </tr>
//                             <tr className="bg-gray-50 border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">VEHICLE TYPE</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].vehicle_type : '...'}</td>
//                             </tr>
//                             <tr className="bg-white border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">PLATE NUMBER</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].license_plate : '...'}</td>
//                             </tr>
//                             <tr className="bg-gray-50 border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">YEAR</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].year : '...'}</td>
//                             </tr>
//                             <tr className="bg-white border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">DRIVER</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].first_name : '...'}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </ul>
//             </div>

//             <div className="w-[80%] mx-auto mt-6 mb-6 p-6 rounded-lg shadow-lg">
//                 <div>
//                     <div className="mb-4 flex gap-6 items-center">
//                         <div className="flex-grow">
//                             <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">Start Time</label>
//                             <input {...register("start-time")} type="datetime-local" id="start-time" name="start-time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
//                         </div>

//                         <div className="flex-grow">
//                             <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">End Time</label>
//                             <input {...register("end-time")} type="datetime-local" id="end-time" name="end-time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//                         <div className="relative">
//                             <GeoapifyContext apiKey="77a6a0616fbd4d22ae652b352b03f67b">
//                                 <GeoapifyGeocoderAutocomplete
//                                     placeholder="Enter location here"
//                                     placeSelect={(d) => console.log("ours", d)}
//                                 />
//                             </GeoapifyContext>
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="mission" className="block text-sm font-medium text-gray-700">Mission</label>
//                         <textarea {...register("mission", { required: true })} id="mission" name="mission" rows="2" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
//                     </div>

//                     <div className="flex justify-end">
//                         <button type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                             Request Booking
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default HomePage;

// src/pages/HomePage.js
// import { useContext } from 'react';
// import peugeot from "../assets/images/peugeot.png";
// import { useState } from "react";
// import useVehicles from "../hooks/useVehicles";
// import { useForm } from "react-hook-form";
// import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
// import getIDFromUrl from '../lib/getIDFromUrl';
// import { BookingContext } from '../context/BookingContext';


// const HomePage = () => {
//     const { data, isLoading } = useVehicles();
//     const [activeIndex, setActiveIndex] = useState(0);
//     const { handleSubmit, register } = useForm();
//     const { addRequest } = useContext(BookingContext);

//     const onSubmit = (data) => {
//         console.log("DATA", data);
//         const newData = {
//             "mission": data.mission,
//             "date": data.date,
//             "start_time": data.start_time,
//             "end_time": data.end_time,
//             "check_in": "8:45",
//             "check_out": "9:45",
//             "staff": "8411e89a-4a72-42eb-abc5-29de2890cae5",
//             "vehicle": data.vehicle
//         };
        
//         fetch("https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/trips/", {
//             body: JSON.stringify(newData),
//             method: "POST",
//             headers: {

//                 "Content-Type": "application/json",
//             }
//         }).then().then(res  => {
//             console.log("RES DATA", res)
//         }).catch(err => console.log(err))
//         // Optionally, navigate to Dashboard
//     };

//     if (isLoading) return <p>Loading...</p>;
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="flex justify-center gap-x-[80px] px-5 mt-24 text-bold ">
//                 <ul className='font-bold mx-8'>
//                     {data && data.results && data.results.map((vehicle, index) => {
//                         return (
//                             <li onClick={() => setActiveIndex(index)} key={vehicle.id}>
//                                 <label className={`${activeIndex === index ? "bg-[#a8cf45] text-gray-800" : ""} block min-w-[255px] my-1 p-4 cursor-pointer hover:bg-[#a8cf45] text-gray-500 border py-3 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800`} htmlFor={vehicle.url}>
//                                     {vehicle.make + " " + vehicle.model}
//                                     <input hidden type="radio" value={getIDFromUrl(vehicle.url)} name="vehicle" id={vehicle.url} {...register("vehicle")} />
//                                 </label>
//                             </li>
//                         );
//                     })}
//                 </ul>

//                 <div className="w-1/2">
//                     {data && data && <img src={data.results[activeIndex].image || peugeot} alt="" className="w-full" />}
//                 </div>

//                 <ul className='font-bold mx-8'>
//                     <li className="min-w-[255px] bg-[#a8cf45] p-4 text-center">
//                         Car Details
//                     </li>

//                     <table className="min-w-full bg-white rounded-lg shadow-md">
//                         <tbody>
//                             <tr className="bg-gray-50 border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">MAKE</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].make : '...'}</td>
//                             </tr>
//                             <tr className="bg-white border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">MODEL</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].model : '...'}</td>
//                             </tr>
//                             <tr className="bg-gray-50 border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">VEHICLE TYPE</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].vehicle_type : '...'}</td>
//                             </tr>
//                             <tr className="bg-white border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">PLATE NUMBER</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].license_plate : '...'}</td>
//                             </tr>
//                             <tr className="bg-gray-50 border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">YEAR</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].year : '...'}</td>
//                             </tr>
//                             <tr className="bg-white border-b">
//                                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">DRIVER</td>
//                                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].staff : '...'}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </ul>
//             </div>

//             <div className="w-[80%] bg-[#e9f4cd] mx-auto mt-6 mb-6 p-6 rounded-lg shadow-xl">
//                 <div>
//                     <div className="mb-4 flex gap-6 items-center">
//                     <div className="flex-grow">
//                             <label htmlFor="date" className="block text-sm font-medium text-gray-700"> Date </label>
//                             <input {...register("date")} type="date" id="date" name="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 " />
//                         </div>
//                         <div className="flex-grow">
//                             <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">Start Time</label>
//                             <input {...register("start_time")} type="time" id="start_time" name="start_time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
//                         </div>

//                         <div className="flex-grow">
//                             <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">End Time</label>
//                             <input {...register("end_time")} type="time" id="end-time" name="end_time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
//                         </div>
                        
//                     </div>

//                     <div className="mb-4 ">
//                         <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//                         <div className="relative rounded-md">
//                             <GeoapifyContext apiKey="77a6a0616fbd4d22ae652b352b03f67b">
//                                 <GeoapifyGeocoderAutocomplete
//                                     placeholder="Enter location here"
//                                     placeSelect={(d) => console.log("ours", d)}
//                                 />
//                             </GeoapifyContext>
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="mission" className="block text-sm font-medium text-gray-700">Mission</label>
//                         <textarea {...register("mission", { required: true })} id="mission" name="mission" rows="2" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
//                     </div>

//                     <div className="flex justify-end">
//                         <button type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                             Request Booking
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default HomePage;
// import { useContext, useState } from 'react';
// import peugeot from "../assets/images/peugeot.png";
// import useVehicles from "../hooks/useVehicles";
// import { useForm } from "react-hook-form";
// import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
// import getIDFromUrl from '../lib/getIDFromUrl';
// import { BookingContext } from '../context/BookingContext';

// const HomePage = () => {
//   const { data, isLoading } = useVehicles();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { handleSubmit, register } = useForm();
//   const { addRequest, setModalOpen, setSelectedRequest } = useContext(BookingContext);

//   const onSubmit = async (data) => {
//     console.log("DATA", data);
//     const newData = {
//       "mission": data.mission,
//       "date": data.date,
//       "start_time": data.start_time,
//       "end_time": data.end_time,
//       "check_in": "8:45",
//       "check_out": "9:45",
//       "staff": "8411e89a-4a72-42eb-abc5-29de2890cae5",
//       "vehicle": data.vehicle
//     };

//     try {
//       const response = await fetch("https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/trips/", {
//         body: JSON.stringify(newData),
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const resData = await response.json();
//       console.log("RES DATA", resData);
//       addRequest(resData);
//       setSelectedRequest(resData);  // Set the newly added request as the selected request
//       setModalOpen(true);           // Open the modal
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="flex justify-center gap-x-[80px] px-5 mt-24 text-bold ">
//         <ul className='font-bold mx-8'>
//           {data && data.results && data.results.map((vehicle, index) => {
//             return (
//               <li onClick={() => setActiveIndex(index)} key={vehicle.id}>
//                 <label className={`${activeIndex === index ? "bg-[#a8cf45] text-gray-800" : ""} block min-w-[255px] my-1 p-4 cursor-pointer hover:bg-[#a8cf45] text-gray-500 border py-3 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800`} htmlFor={vehicle.url}>
//                   {vehicle.make + " " + vehicle.model}
//                   <input hidden type="radio" value={getIDFromUrl(vehicle.url)} name="vehicle" id={vehicle.url} {...register("vehicle")} />
//                 </label>
//               </li>
//             );
//           })}
//         </ul>

//         <div className="w-1/2">
//           {data && data && <img src={data.results[activeIndex].image || peugeot} alt="" className="w-full" />}
//         </div>

//         <ul className='font-bold mx-8'>
//           <li className="min-w-[255px] bg-[#a8cf45] p-4 text-center">
//             Car Details
//           </li>

//           <table className="min-w-full bg-white rounded-lg shadow-md">
//             <tbody>
//               <tr className="bg-gray-50 border-b">
//                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">MAKE</td>
//                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].make : '...'}</td>
//               </tr>
//               <tr className="bg-white border-b">
//                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">MODEL</td>
//                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].model : '...'}</td>
//               </tr>
//               <tr className="bg-gray-50 border-b">
//                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">VEHICLE TYPE</td>
//                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].vehicle_type : '...'}</td>
//               </tr>
//               <tr className="bg-white border-b">
//                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">PLATE NUMBER</td>
//                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].license_plate : '...'}</td>
//               </tr>
//               <tr className="bg-gray-50 border-b">
//                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">YEAR</td>
//                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].year : '...'}</td>
//               </tr>
//               <tr className="bg-white border-b">
//                 <td className="py-3 px-4 text-left text-sm font-medium text-gray-700">DRIVER</td>
//                 <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].staff : '...'}</td>
//               </tr>
//             </tbody>
//           </table>
//         </ul>
//       </div>

//       <div className="w-[80%] bg-[#e9f4cd] mx-auto mt-6 mb-6 p-6 rounded-lg shadow-xl">
//         <div>
//           <div className="mb-4 flex gap-6 items-center">
//             <div className="flex-grow">
//               <label htmlFor="date" className="block text-sm font-medium text-gray-700"> Date </label>
//               <input {...register("date")} type="date" id="date" name="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 " />
//             </div>
//             <div className="flex-grow">
//               <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">Start Time</label>
//               <input {...register("start_time")} type="time" id="start_time" name="start_time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
//             </div>
//             <div className="flex-grow">
//               <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">End Time</label>
//               <input {...register("end_time")} type="time" id="end-time" name="end_time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
//             </div>
//           </div>

//           <div className="mb-4 ">
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//             <div className="relative rounded-md">
//               <GeoapifyContext apiKey="77a6a0616fbd4d22ae652b352b03f67b">
//                 <GeoapifyGeocoderAutocomplete
//                   placeholder="Enter location here"
//                   placeSelect={(d) => console.log("ours", d)}
//                 />
//               </GeoapifyContext>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="mission" className="block text-sm font-medium text-gray-700">Mission</label>
//             <textarea {...register("mission", { required: true })} id="mission" name="mission" rows="2" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
//           </div>

//           <div className="flex justify-end">
//             <button type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Request Booking
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default HomePage;
// src/pages/HomePage.js
import { useContext, useState } from 'react';
import peugeot from "../assets/images/peugeot.png";
import useVehicles from "../hooks/useVehicles";
import { useForm } from "react-hook-form";
import { BookingContext } from '../context/BookingContext';
import SubmissionModal from '../components/SubmissionModal';
import useAuth from '../hooks/auth/store';

const HomePage = () => {
  const { data, isLoading } = useVehicles();
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleSubmit, register } = useForm();
  const { addRequest, setModalOpen, setSelectedRequest } = useContext(BookingContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const newData = {
      "date": data.date,
      "start_time": data.start_time,
      "end_time": data.end_time,
      "check_in": "8:45",
      "check_out": "9:45",
      "staff": user.id,
      "vehicle": data.vehicle,
      "destinations": [{
        "address": data.address,
        "mission": data.mission,
        "visit_duration": "1:00" // Adjust this value as needed
      }]
    };

    try {
      const response = await fetch("https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/trips/", {
        body: JSON.stringify(newData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const resData = await response.json();
      setSubmittedData(resData);
      setIsModalOpen(true); // Open the modal upon successful submission
      addRequest(resData);
      setSelectedRequest(resData);  // Set the newly added request as the selected request
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-6 px-4">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-x-[80px] mt-24 text-bold">
        <ul className='font-bold mx-8 mb-6 lg:mb-0'>
          {data && data.results && data.results.map((vehicle, index) => {
            return (
              <li onClick={() => {
                setActiveIndex(index);
              }} key={vehicle.id}>
                <label className={`${activeIndex === index ? "bg-[#a8cf45] text-gray-800 shadow-lg" : "shadow-md"} block min-w-[255px] my-1 p-4 cursor-pointer hover:bg-[#a8cf45] text-gray-500 border py-3 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800 rounded-md`} htmlFor={vehicle.id}>
                  {vehicle.make + " " + vehicle.model}
                  <input hidden type="radio" value={(vehicle.id)} name="vehicle" id={vehicle.id} {...register("vehicle")} />
                </label>
              </li>
            );
          })}
        </ul>

        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          {data && data.results && <img src={data.results[activeIndex].image || peugeot} alt="" className="w-full rounded-lg shadow-lg" />}
        </div>

        <ul className='font-bold mx-8'>
          <li className="min-w-[255px] bg-[#a8cf45] p-4 text-center rounded-md shadow-lg">
            Car Details
          </li>

          <table className="min-w-full bg-white rounded-lg shadow-md">
            <tbody>
              <tr className="bg-gray-50 border-b">
                <td className="py-3 px-4 text-left text-sm text-gray-600">Make</td>
                <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].make : '...'}</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-3 px-4 text-left text-sm text-gray-600">Model</td>
                <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].model : '...'}</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="py-3 px-4 text-left text-sm text-gray-600">Vehicle Type</td>
                <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].vehicle_type : '...'}</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-3 px-4 text-left text-sm text-gray-600">Plate Number</td>
                <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].license_plate : '...'}</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="py-3 px-4 text-left text-sm text-gray-600">Year</td>
                <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].year : '...'}</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-3 px-4 text-left text-sm text-gray-600">Driver</td>
                <td className="py-3 px-4 text-left text-sm text-gray-500">{data && data.results ? data.results[activeIndex].staff : '...'}</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>

      <div className="w-full lg:w-[60%] bg-[#dbded4] mx-auto mt-6 mb-[40px] p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div>
          <div className="mb-4 flex flex-col sm:flex-row lg:flex-row gap-6 items-center">
            <div className="flex-grow">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700"> Date </label>
              <input {...register("date")} type="date" id="date" name="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-600" />
            </div>
            <div className="flex-grow">
              <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">Start Time</label>
              <input {...register("start_time")} type="time" id="start_time" name="start_time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-600" />
            </div>
            <div className="flex-grow">
              <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">End Time</label>
              <input {...register("end_time")} type="time" id="end_time" name="end_time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-600" />
            </div>
          </div>

          <div className="flex-grow">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Destination</label>
            <input {...register("address")} type="text" id="destinations" name="address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none shadow-lg focus:ring-2 focus:ring-blue-500 font-bold text-gray-600" />
          </div>

          <div className="mb-4">
            <label htmlFor="mission" className="block text-sm font-medium text-gray-700">Mission</label>
            <textarea {...register("mission", { required: true })} id="mission" name="mission" rows="2" className="px-4 py-2 mt-1 block w-full rounded-md border-gray-700 shadow-lg focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Request Booking
            </button>
          </div>
        </div>
      </div>

      <SubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold">Booking Request Submitted</h3>
        <p>Your booking request has been successfully submitted.</p>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </SubmissionModal>
    </form>
  );
};

export default HomePage;
