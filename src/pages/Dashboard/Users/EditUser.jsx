// import React from 'react'
import { useForm } from "react-hook-form"
import baseURL from "../../../services/apiClient"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import useSingleStaff from "../../../hooks/useSingleStaff"

const EditUser = () => {
    const {id} = useParams();
    const [isSubmitting, setIsLoading] = useState(false)
    const [staff, setStaff] = useState()

    const { handleSubmit, register } = useForm()

    useEffect(() => {
        setIsLoading(true)
         const fetchStaff = async () => {
           const res = await fetch(`${baseURL}/api/v1/staff/${id}/`)
           if (res.ok) { 
            const data = await res.json();
            // console.log("Staff: ", data)
            setStaff(data)
            }else{
                console.error('Failed to fetch data:', res.status);
            }
          }
            fetchStaff()
            setIsLoading(false) 
    }, [])

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            formData.append("first_name", data.first_name);
            formData.append("last_name", data.last_name);
            formData.append("username", data.username);
            formData.append("phone", data.phone);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("department", data.department);

            const jsonData = {
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username,
                phone: data.phone,
                // image:data.image,
                password: data.password,
                email: data.email,
                department: "594383dc-482b-403b-9ad6-4eef598449f2",
            };
    
            // const boundary = "boundary"; // Generate a unique boundary value
            const headers = {
                // "Content-Type": `multipart/form-data; boundary=${boundary}`
                "Content-Type": `application/json`
            };
    
            console.log("JSON DATA", jsonData)
            const res = await fetch(`${baseURL}/api/v1/staff/`, {
                method: 'PUT',
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

    }

if(staff)
  return (
    <div>
        <div className="max-w-md mx-auto m-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input {...register("first_name", { required: true })} defaultValue={staff.first_name ||""} id="first_name" name="first_name" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input {...register("last_name", { required: true })} defaultValue={staff.last_name ||""} id="last_name" name="last_name" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input {...register("username", { required: true })} defaultValue={staff.username ||""} id="username" name="username" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input {...register("email", { required: true })} defaultValue={staff.email ||""} id="email" name="email" type="email" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Department</label>
                    <input {...register("department", { required: true })} defaultValue={staff.department ||""} id="department" name="department" type="text" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input {...register("phone", { required: true })} defaultValue={staff.phone ||""} id="phone" name="phone" type="phone" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input {...register("password", { required: true })} defaultValue={staff.password ||""} id="password" name="password" type="password" className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="flex justify-center">
                    <button disabled ={isSubmitting} type="submit" className="bg-gray-800 hover:bg-[#a8cf45] text-white font-bold py-2 px-4 rounded">{isSubmitting ? "Loading...":"Submit"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser