// import React from "react"
// import { useForm } from "react-hook-form"
// import baseURL from "../../../services/apiClient"
// import { useState } from "react"
// const NewCar = () => {

//     const [isLoading, setIsLoading] = useState(false)

//     const { handleSubmit, register } = useForm()
//     const onSubmit = async (data) => {
//         try {
//             const formData = new FormData();

//             formData.append("make", data.make);
//             formData.append("model", data.model);
//             formData.append("license_plate", data.license_plate);
//             formData.append("vehicle_type", data.vehicle_type);
//             formData.append("image", data.image);
//             formData.append("year", data.year);
//             formData.append("driver", data.driver);
//             formData.append("department", data.department);

//             const jsonData = {
//                 make: data.make,
//                 model: data.model,
//                 license_plate: data.license_plate,
//                 vehicle_type: data.vehicle_type,
//                 // image:data.image,
//                 year: data.year,
//                 driver: "5c6a1080-3c83-4c08-a1a6-d7b29fcd222b",
//                 department: "594383dc-482b-403b-9ad6-4eef598449f2",
//             };
    
//             // const boundary = "boundary"; // Generate a unique boundary value
//             const headers = {
//                 // "Content-Type": `multipart/form-data; boundary=${boundary}`
//                 "Content-Type": `application/json`
//             };
    
//             console.log("JSON DATA", jsonData)
//             const res = await fetch(`${baseURL}/api/v1/vehicles/`, {
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

//     return (
//         <div>
//             <div className="max-w-lg mx-auto m-8 p-6 bg-gray-100 rounded-lg mt-26">
//                 <h2 className="text-xl font-bold mb-4">Car Details</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Make</label>
//                         <input {...register("make", { required: true })} id="make" name="make" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Model</label>
//                         <input {...register("model", { required: true })} id="model" name="model" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
//                         <input {...register("vehicle_type", { required: true })} id="vehicle_type" name="vehicle_type" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     {/* <div>
//                         <label className="block text-sm font-medium text-gray-700">Color</label>
//                         <input {...register("color", { required: true })} id="color" name="color" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div> */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//                         <input {...register("image", { })} id="image" name="image" type="file" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Department Assigned</label>
//                         <input {...register("department", { required: true })} id="department" name="department" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Plate Number</label>
//                         <input {...register("license_plate", { required: true })} id="license_plate" name="license_plate" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Year</label>
//                         <input {...register("year", { required: true })} id="year" name="year" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Driver</label>
//                         <input {...register("driver", { required: true })} id="driver" name="driver" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div className="flex justify-center">
//                         <button  disabled ={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isLoading ? "Loading...":"Submit"}</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default NewCar

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { IoArrowBackCircleOutline } from 'react-icons/io5';
// import baseURL from "../../../services/apiClient";

// const NewCar = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     const { handleSubmit, register } = useForm();

//     const handleBackClick = () => {
//         navigate('../cars'); // Adjust the path according to your routing setup
//     };

//     const onSubmit = async (data) => {
//         try {
//             const formData = new FormData();
//             formData.append("make", data.make);
//             formData.append("model", data.model);
//             formData.append("license_plate", data.license_plate);
//             formData.append("vehicle_type", data.vehicle_type);
//             formData.append("image", data.image);
//             formData.append("year", data.year);
//             formData.append("driver", data.driver);
//             formData.append("department", data.department);

//             const jsonData = {
//                 make: data.make,
//                 model: data.model,
//                 license_plate: data.license_plate,
//                 vehicle_type: data.vehicle_type,
//                 // image:data.image,
//                 year: data.year,
//                 driver: data.driver,
//                 department: data.department
//             };

//             const headers = {
//                 "Content-Type": `application/json`
//             };

//             console.log("JSON DATA", jsonData);
//             const res = await fetch(`${baseURL}/api/v1/vehicles/`, {
//                 method: 'POST',
//                 body: JSON.stringify(jsonData),
//                 headers: headers
//             });

//             // Log form data values
//             for (const pair of formData.entries()) {
//                 console.log(pair[0], pair[1]);
//             }

//             const resData = await res.json();

//             console.log("RES-DATA", resData);
//         } catch (error) {
//             console.log("ERROR", error);
//         }
//     };

//     return (
//         <div className="relative min-h-screen p-8">
//             <div className="text-center ">
//                 {/* Back Button */}
//                 <button
//                     onClick={handleBackClick}
//                     className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
//                 >
//                     <IoArrowBackCircleOutline />
//                 </button>

//                 {/* Header */}
//                 <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//                     <p className="text-4xl ml-7">Car Details</p>
//                 </div>
//             </div>

//             <div className="max-w-lg mx-auto m-8 p-6 bg-gray-100 rounded-lg mt-26">
//                 <h2 className="text-xl font-bold mb-4">Car Details</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Make</label>
//                         <input {...register("make", { required: true })} id="make" name="make" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Model</label>
//                         <input {...register("model", { required: true })} id="model" name="model" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
//                         <input {...register("vehicle_type", { required: true })} id="vehicle_type" name="vehicle_type" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//                         <input {...register("image", { })} id="image" name="image" type="file" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Department Assigned</label>
//                         <input {...register("department", { required: true })} id="department" name="department" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Plate Number</label>
//                         <input {...register("license_plate", { required: true })} id="license_plate" name="license_plate" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Year</label>
//                         <input {...register("year", { required: true })} id="year" name="year" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Driver</label>
//                         <input {...register("driver", { required: false })} id="driver" name="driver" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div className="flex justify-center">
//                         <button disabled={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isLoading ? "Loading..." : "Submit"}</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default NewCar;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import baseURL from "../../../services/apiClient";

const NewCar = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, register } = useForm();

    const handleBackClick = () => {
        navigate('../cars'); // Adjust the path according to your routing setup
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("make", data.make);
            formData.append("model", data.model);
            formData.append("license_plate", data.license_plate);
            formData.append("vehicle_type", data.vehicle_type);
            formData.append("image", data.image[0]);
            formData.append("year", data.year);
            formData.append("driver", data.driver);
            formData.append("department", data.department);
            formData.append("is_available", data.is_available);

            const jsonData = {
                make: data.make,
                model: data.model,
                license_plate: data.license_plate,
                vehicle_type: data.vehicle_type,
                year: data.year,
                driver: data.driver,
                department: data.department,
                is_available: data.is_available
            };

            const headers = {
                "Content-Type": `application/json`
            };

            console.log("JSON DATA", jsonData);
            const res = await fetch(`${baseURL}/api/v1/vehicles/`, {
                method: 'POST',
                body: JSON.stringify(jsonData),
                headers: headers
            });

            // Log form data values
            for (const pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            const resData = await res.json();

            console.log("RES-DATA", resData);
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    return (
        <div className="relative min-h-screen p-8">
            <div className="text-center ">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
                >
                    <IoArrowBackCircleOutline />
                </button>

                {/* Header */}
                <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
                    <p className="text-4xl ml-7">Car Details</p>
                </div>
            </div>

            <div className="max-w-lg mx-auto m-8 p-6 bg-gray-100 rounded-lg mt-26">
                <h2 className="text-xl font-bold mb-4">Car Details</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                        <input {...register("vehicle_type", { required: true })} id="vehicle_type" name="vehicle_type" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Make</label>
                        <input {...register("make", { required: true })} id="make" name="make" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Model</label>
                        <input {...register("model", { required: true })} id="model" name="model" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Year</label>
                        <input {...register("year", { required: true })} id="year" name="year" type="number" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input {...register("image", { required: true })} id="image" name="image" type="file" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">License Plate</label>
                        <input {...register("license_plate", { required: true })} id="license_plate" name="license_plate" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Current Location</label>
                        <input {...register("current_location", { required: true })} id="current_location" name="current_location" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="flex items-center">
                        <input
                            {...register("is_available")}
                            id="is_available"
                            name="is_available"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="is_available" className="ml-2 block text-sm text-gray-900">Is Available</label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Driver</label>
                        <input {...register("driver", { required: false })} id="driver" name="driver" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Department</label>
                        <input {...register("department", { required: true })} id="department" name="department" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-center">
                        <button disabled={isLoading} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isLoading ? "Loading..." : "Submit"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewCar;

