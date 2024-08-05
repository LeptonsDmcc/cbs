import React from 'react';
import useAuth from "../hooks/auth/store";

const Profile = () => {
  // Sample data for the profile
  const { user } = useAuth();
  const profileData = {
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    department: user.department,
    email: user.email,
    phone: user.phone,
  };

  return (
    <div className="container min-h-screen mx-auto p-4 mt-8 max-w-4xl bg-gray-100">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold px-6 mb-6 mt-10 rounded-lg">
        <p className="text-2xl lg:text-4xl">Profile</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
              {profileData.first_name} {profileData.last_name}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Username</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
              {profileData.username}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Department</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
              {profileData.department}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
              {profileData.email}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
              {profileData.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
