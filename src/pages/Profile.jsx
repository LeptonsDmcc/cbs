// import React from 'react';
import useAuth from "../hooks/auth/store";

const Profile = () => {
  // Sample data for the profile
  const {user} = useAuth()
  const profileData = {
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    department: user.department,
    email: user.email,
    phone: user.phone
  };

  return (
    <div className="container w-1/2 mx-auto p-4 mt-8 ">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-[#a8cf45] p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Full Name</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100">
            {profileData.first_name} {profileData.last_name}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100">
            {profileData.username}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Department</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100">
            {profileData.department}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100">
            {profileData.email}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100">
            {profileData.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
