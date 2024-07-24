// // import React from 'react'
// import { useForm } from "react-hook-form"
// import baseURL from "../../../services/apiClient"
// import { useState } from "react"

// const AddUser = () => {

//     const [isLoading, setIsLoading] = useState(false)

//     const { handleSubmit, register } = useForm()
//     const onSubmit = async (data) => {
//         try {
//             const formData = new FormData();

//             formData.append("first_name", data.first_name);
//             formData.append("last_name", data.last_name);
//             formData.append("username", data.username);
//             formData.append("phone", data.phone);
//             formData.append("email", data.email);
//             formData.append("password", data.password);
//             formData.append("department", data.department);

//             const jsonData = {
//                 first_name: data.first_name,
//                 last_name: data.last_name,
//                 username: data.username,
//                 phone: data.phone,
//                 // image:data.image,
//                 password: data.password,
//                 // password2: data.password2,
//                 email: data.email,
//                 // department: data.department,
//             };
    
//             // const boundary = "boundary"; // Generate a unique boundary value
//             const headers = {
//                 // "Content-Type": `multipart/form-data; boundary=${boundary}`
//                 "Content-Type": `application/json`
//             };
    
//             console.log("JSON DATA", jsonData)
//             const res = await fetch(`${baseURL}/api/v1/staff/registration/`, {
//                 method: 'POST',
//                 body: JSON.stringify(jsonData),
//                 headers: headers
//             });

//              // Log form data values
//             for (const pair of formData.entries()) {
//                 console.log(pair[0], pair[1]);
//             }
    
//             const resData = await res.json();
    
//             console.log("RES-DATA", resData);
//         } catch (error) {
//             console.log("ERROR", error);
//         }

//     }
//   return (
//     <div>
//         <div className="max-w-md mx-auto m-8 mt-11 p-4 bg-gray-100 rounded-lg">
//             <h2 className="text-xl font-bold mb-4">User Details</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                     <input {...register("first_name", { required: true })} id="first_name" name="first_name" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input {...register("last_name", { required: true })} id="last_name" name="last_name" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Username</label>
//                     <input {...register("username", { required: true })} id="username" name="username" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                     <input {...register("email", { required: true })} id="email" name="email" type="email" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 {/* <div>
//                     <label className="block text-sm font-medium text-gray-700">Department</label>
//                     <input {...register("department", { required: true })} id="department" name="department" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div> */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                     <input {...register("phone", { required: true })} id="phone" name="phone" type="phone" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Password</label>
//                     <input {...register("password", { required: true })} id="password" name="password" type="password" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 {/* <div>
//                     <label className="block text-sm font-medium text-gray-700">Password2</label>
//                     <input {...register("password2", { required: true })} id="password" name="password" type="password" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div> */}
//                 <div className="flex justify-center">
//                     <button disabled ={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isLoading ? "Loading...":"Submit"}</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default AddUser

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import baseURL from '../../../services/apiClient';
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';

// const AddUser = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { handleSubmit, register, watch } = useForm();
//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();

//       formData.append("first_name", data.first_name);
//       formData.append("last_name", data.last_name);
//       formData.append("username", data.username);
//       formData.append("phone", data.phone);
//       formData.append("email", data.email);
//       formData.append("password", data.password);
//       formData.append("department", data.department);

//       const jsonData = {
//         first_name: data.first_name,
//         last_name: data.last_name,
//         username: data.username,
//         phone: data.phone,
//         password1: data.password,
//         email: data.email,
//       };

//       const headers = {
//         "Content-Type": "application/json"
//       };

//       const res = await fetch(`${baseURL}/api/v1/staff/registration/`, {
//         method: 'POST',
//         body: JSON.stringify(jsonData),
//         headers: headers
//       });

//       const resData = await res.json();

//       console.log("RES-DATA", resData);
//     } catch (error) {
//       console.log("ERROR", error);
//     }
//   };

//   const handleBackClick = () => {
//     navigate('../users'); // Adjust the path according to your routing setup
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const password = watch('password');

//   return (
//     <div className="relative min-h-screen p-8 items-center max-w-lg mx-auto m-8 bg-gray-100 rounded-lg mt-26">
//         {/* Back Button */}
//       <button
//         onClick={handleBackClick}
//         className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
//       >
//         <IoArrowBackCircleOutline />
//       </button>

//       {/* Header */}
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//         <p className="text-4xl ml-14">Add User</p>
//       </div>
//       <div className="max-w-md w-full bg-gray-200 shadow-md rounded-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register Staff</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">First Name</label>
//             <input {...register("first_name", { required: true })} id="first_name" name="first_name" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input {...register("last_name", { required: true })} id="last_name" name="last_name" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Username</label>
//             <input {...register("username", { required: true })} id="username" name="username" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input {...register("email", { required: true })} id="email" name="email" type="email" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input {...register("phone", { required: true })} id="phone" name="phone" type="tel" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input {...register("password", { required: true })} id="password" name="password" type={showPassword ? "text" : "password"} className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//             <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={togglePasswordVisibility}>
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input {...register("password", { validate: value => value === password || "Passwords do not match" })} id="confirm_password" name="confirm_password" type={showPassword ? "text" : "password"} className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//             <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={togglePasswordVisibility}>
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <div className="flex justify-center">
//             <button disabled={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isLoading ? "Loading..." : "Submit"}</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import baseURL from '../../../services/apiClient';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, register, watch } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const jsonData = {
        email: data.email,
        password1: data.password,
        password2: data.password2,
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        is_driver: data.is_driver,
        department: data.department
      };

      const headers = {
        "Content-Type": "application/json"
      };

      const res = await fetch(`${baseURL}/api/v1/staff/registration/`, {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: headers
      });

      const resData = await res.json();

      console.log("RES-DATA", resData);
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR", error);
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate('../users'); // Adjust the path according to your routing setup
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const password = watch('password');

  return (
    <div className="relative min-h-screen p-8 items-center max-w-lg mx-auto m-8 bg-gray-100 rounded-lg mt-26">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
      >
        <IoArrowBackCircleOutline />
      </button>

      {/* Header */}
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
        <p className="text-4xl ml-14">Add User</p>
      </div>
      <div className="max-w-md w-full bg-gray-200 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Staff</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input {...register("first_name", { required: true })} id="first_name" name="first_name" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input {...register("last_name", { required: true })} id="last_name" name="last_name" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input {...register("email", { required: true })} id="email" name="email" type="email" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input {...register("phone", { required: true })} id="phone" name="phone" type="tel" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input {...register("password", { required: true })} id="password" name="password" type={showPassword ? "text" : "password"} className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input {...register("password2", { validate: value => value === password || "Passwords do not match" })} id="confirm_password" name="password2" type={showPassword ? "text" : "password"} className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Is Driver</label>
            <input {...register("is_driver")} id="is_driver" name="is_driver" type="checkbox" className="mt-1 block" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input {...register("department", { required: true })} id="department" name="department" type="text" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="flex justify-center">
            <button disabled={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isLoading ? "Loading..." : "Submit"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

