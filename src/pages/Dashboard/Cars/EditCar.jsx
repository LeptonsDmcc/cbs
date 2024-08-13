// import  { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoArrowBackCircleOutline } from 'react-icons/io5';
// import baseURL from "../../../services/apiClient";

// const EditCar = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [isSubmitting, setIsLoading] = useState(false);
//     const [vehicle, setVehicle] = useState();
//     const { handleSubmit, register } = useForm();

//     useEffect(() => {
//         setIsLoading(true);
//         const fetchVehicle = async () => {
//             const res = await fetch(`${baseURL}/api/v1/vehicles/${id}/`);
//             if (res.ok) {
//                 const data = await res.json();
//                 setVehicle(data);
//             } else {
//                 console.error('Failed to fetch data:', res.status);
//             }
//             setIsLoading(false);
//         };
//         fetchVehicle();
//     }, [id]);

//     const handleBackClick = () => {
//         navigate('../cars'); // Adjust the path according to your routing setup
//     };

//     const onSubmit = async (data) => {
//         try {
//             const jsonData = {
//                 make: data.make,
//                 model: data.model,
//                 license_plate: data.license_plate,
//                 vehicle_type: data.vehicle_type,
//                 year: data.year,
//                 driver: data.driver,
//                 department: "4bb2ac94-ffd7-4de7-a4ea-dd30f7730ec6",
//             };

//             const headers = {
//                 "Content-Type": `application/json`
//             };

//             const res = await fetch(`${baseURL}/api/v1/vehicles/`, {
//                 method: 'POST',
//                 body: JSON.stringify(jsonData),
//                 headers: headers
//             });

//             const resData = await res.json();
//             console.log("RES-DATA", resData);
//         } catch (error) {
//             console.log("ERROR", error);
//         }
//     };
//     if (vehicle)

//     return (
//         <div>
//             <div className="relative min-h-screen p-8">
//                 <div className="text-center ">
//                 {/* Back Button */}
//                 <button
//                     onClick={handleBackClick}
//                     className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
//                 >
//                     <IoArrowBackCircleOutline />
//                 </button>

//                 {/* Header */}
//                 <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//                     <p className="text-4xl ml-7">Edit Car Details</p>
//                 </div>
//                 </div>

//                 <h2 className="text-xl font-bold mb-4">Edit Car Details</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Make</label>
//                         <input {...register("make", { required: true  })} defaultValue={vehicle.make ||""}  id="make" name="make" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Model</label>
//                         <input {...register("model", { required: true })} defaultValue={vehicle.model ||""} id="model" name="model" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
//                         <input {...register("vehicle_type", { required: true })} defaultValue={vehicle.vehicle_type ||""} id="vehicle_type" name="vehicle_type" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//                         <input {...register("image", {})}  id="image" name="image" type="file" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Department Assigned</label>
//                         <input {...register("department", { required: true })} defaultValue={vehicle.department ||""} id="department" name="department" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Plate Number</label>
//                         <input {...register("license_plate", { required: true })} defaultValue={vehicle.license_plate ||""} id="license_plate" name="license_plate" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Year</label>
//                         <input {...register("year", { required: true })} defaultValue={vehicle.year ||""} id="year" name="year" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Driver</label>
//                         <input {...register("driver", { required: false })} defaultValue={vehicle.driver ||""} id="driver" name="driver" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//                     </div>
//                     <div className="flex justify-center">
//                         <button disabled={isSubmitting} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">
//                             {isSubmitting ? "Loading..." : "Submit"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default EditCar;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import baseURL from "../../../services/apiClient";

const EditCar = () => {
    const { id } = useParams(); // Get the car ID from the URL parameters
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, register, setValue } = useForm();
    const [carData, setCarData] = useState(null);

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const res = await fetch(`${baseURL}/api/v1/vehicles/${id}`);
                const data = await res.json();
                setCarData(data);
                
                // Set form values based on the fetched car data
                setValue("make", data.make);
                setValue("model", data.model);
                setValue("license_plate", data.license_plate);
                setValue("vehicle_type", data.vehicle_type);
                setValue("year", data.year);
                setValue("driver", data.driver);
                setValue("department", data.department);
                setValue("is_available", data.is_available);
                setValue("current_location", data.current_location);
            } catch (error) {
                console.log("ERROR", error);
            }
        };

        fetchCarData();
    }, [id, setValue]);

    const handleBackClick = () => {
        navigate('../cars'); // Adjust the path according to your routing setup
    };

    const onSubmit = async (data) => {
        try {
            const jsonData = {
                make: data.make,
                model: data.model,
                license_plate: data.license_plate,
                vehicle_type: data.vehicle_type,
                year: data.year,
                driver: data.driver,
                department: data.department,
                is_available: data.is_available,
                current_location: data.current_location,
            };

            const headers = {
                "Content-Type": `application/json`
            };

            console.log("JSON DATA", jsonData);
            const res = await fetch(`${baseURL}/api/v1/vehicles/${id}/`, {
                method: 'PUT',
                body: JSON.stringify(jsonData),
                headers: headers
            });

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
                    <p className="text-4xl ml-7">Edit Car Details</p>
                </div>
            </div>

            <div className="max-w-lg mx-auto m-8 p-6 bg-gray-100 rounded-lg mt-26">
                <h2 className="text-xl font-bold mb-4">Edit Car Details</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                        <input {...register("vehicle_type", { required: true })}  id="vehicle_type" name="vehicle_type" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
                        <input {...register("image", { required: false })} id="image" name="image" type="file" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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

export default EditCar;


