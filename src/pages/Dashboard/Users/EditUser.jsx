// // import React from 'react'
// import { useForm } from "react-hook-form"
// import baseURL from "../../../services/apiClient"
// import { useState , useEffect} from "react"
// import { useParams } from "react-router-dom"
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import useSingleStaff from "../../../hooks/useSingleStaff"

// const EditUser = () => {
//     const {id} = useParams();
//     const [isSubmitting, setIsLoading] = useState(false)
//     const [staff, setStaff] = useState()

//     const { handleSubmit, register } = useForm()

//     useEffect(() => {
//         setIsLoading(true)
//          const fetchStaff = async () => {
//            const res = await fetch(`${baseURL}/api/v1/staff/${id}/`)
//            if (res.ok) { 
//             const data = await res.json();
//             // console.log("Staff: ", data)
//             setStaff(data)
//             }else{
//                 console.error('Failed to fetch data:', res.status);
//             }
//           }
//             fetchStaff()
//             setIsLoading(false) 
//     }, [])

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
//                 email: data.email,
//                 department: "594383dc-482b-403b-9ad6-4eef598449f2",
//             };
    
//             // const boundary = "boundary"; // Generate a unique boundary value
//             const headers = {
//                 // "Content-Type": `multipart/form-data; boundary=${boundary}`
//                 "Content-Type": `application/json`
//             };
    
//             console.log("JSON DATA", jsonData)
//             const res = await fetch(`${baseURL}/api/v1/staff/`, {
//                 method: 'PUT',
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

// if(staff)
//   return (
//     <div>
//         <div className="max-w-md mx-auto m-8 p-4 bg-gray-100 rounded-lg">
//             <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                     <input {...register("first_name", { required: true })} defaultValue={staff.first_name ||""} id="first_name" name="first_name" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input {...register("last_name", { required: true })} defaultValue={staff.last_name ||""} id="last_name" name="last_name" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Username</label>
//                     <input {...register("username", { required: true })} defaultValue={staff.username ||""} id="username" name="username" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                     <input {...register("email", { required: true })} defaultValue={staff.email ||""} id="email" name="email" type="email" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Department</label>
//                     <input {...register("department", { required: true })} defaultValue={staff.department ||""} id="department" name="department" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                     <input {...register("phone", { required: true })} defaultValue={staff.phone ||""} id="phone" name="phone" type="phone" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Password</label>
//                     <input {...register("password", { required: true })} defaultValue={staff.password ||""} id="password" name="password" type="password" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                 </div>
//                 <div className="flex justify-center">
//                     <button disabled ={isSubmitting} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isSubmitting ? "Loading...":"Submit"}</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default EditUser
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import baseURL from '../../../services/apiClient';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams(); // Assuming you are passing userId as a route param
  const { handleSubmit, register, watch, reset } = useForm();
  

  // Fetch departments and user data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [departmentRes, userRes] = await Promise.all([
          fetch(`${baseURL}/api/v1/departments/`),
          fetch(`${baseURL}/api/v1/manage/staff/${userId}/`)
        ]);

        const departmentData = await departmentRes.json();
        const userData = await userRes.json();

        setDepartments(departmentData.results || []);
        setUserData(userData);
        reset(userData); // Reset the form with fetched user data
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [userId, reset]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const jsonData = {
        email: data.email,
        password: data.password || userData.password, // Only update if the password is provided
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        is_driver: data.is_driver,
        department: data.department
      };

      const headers = {
        "Content-Type": "application/json"
      };

      const res = await fetch(`${baseURL}/api/v1/manage/staff/${userId}/`, {
        method: 'PUT', // Using PUT to update the user
        body: JSON.stringify(jsonData),
        headers: headers
      });

      const resData = await res.json();
      console.log("RES-DATA", resData);
      setIsLoading(false);
      navigate('../users'); // Redirect to users page after successful update
    } catch (error) {
      console.error("ERROR", error);
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

  if (!userData) {
    return <div>Loading...</div>; // Display loading until user data is fetched
  }

  return (
    <div className="relative min-h-screen p-8 items-center max-w-lg mx-auto bg-gray-100 rounded-lg mt-26">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
      >
        <IoArrowBackCircleOutline />
      </button>

      {/* Header */}
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
        <p className="text-4xl ml-14">Edit User</p>
      </div>
      <div className="max-w-md w-full bg-gray-200 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Staff Details</h2>
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
            <input {...register("phone", { required: true })}  id="phone" name="phone" type="tel" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input {...register("password")} id="password" name="password" type={showPassword ? "text" : "password"} className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
            <select {...register("department", { required: true })} id="department" name="department" className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
            <button disabled={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">
              {isLoading ? "Loading..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
