import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import baseURL from '../../../services/apiClient';

const UserDetails = () => {
  const { staffId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [staff, setStaff] = useState();

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const response = await fetch(`${baseURL}/api/v1/staff/${staffId}/`);
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (error) {
  //       console.error('Error fetching user details:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchUserDetails();
  // }, [staffId]);

  useEffect(() => {
    setIsLoading(true)
     const fetchStaff = async () => {
       const res = await fetch(`${baseURL}/api/v1/staff/${staffId}/`)
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

  const handleBackClick = () => {
    navigate('../users'); // Adjust the path according to your routing setup
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!staff) {
    return <p>User not found</p>;
  }
  if (staff)
  return (
    <div className="relative min-h-screen p-8">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-9 left-6 text-white px-4 py-4 rounded-full text-3xl hover:bg-gray-700 transition duration-300"
      >
        <IoArrowBackCircleOutline />
      </button>

      {/* Header */}
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
        <p className="text-4xl ml-14">User Details</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 px-8 lg:px-20">
        {/* User Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:w-[60%] mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4 pl-4">User Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <p><span className="font-semibold">FullName:</span> {staff.first_name} {staff.last_name}</p>
            <p><span className="font-semibold">Username:</span> {staff.username}</p>
            <p><span className="font-semibold">Email:</span> {staff.email}</p>
            <p><span className="font-semibold">Department:</span> {staff.department}</p>
            <p><span className="font-semibold">Phone Number:</span> {staff.phone_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
