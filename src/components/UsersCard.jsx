// import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import useManageStaff from '../hooks/useManageStaff';

const UsersCard = () => {
  const { data, isLoading } = useManageStaff();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-xs">
              <th className="pl-2">Name</th>
              <th className="pl-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="2" className="text-center p-2">Loading...</td></tr>
            ) : (
              data &&
              data.results.slice(0, 5).map((staff) => (
                <tr key={staff.url} className="bg-gray-100 h-[70px] text-gray-700 border-b text-sm">
                  <td className="pl-2">{staff.first_name} {staff.last_name}</td>
                  <td className="pl-2">
                    <Link
                      to={`/admin/users/UserDetails/${(staff.id)}`}
                      className="text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors p-1"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Link
        to="/admin/users"
        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
      >
        View All Users
      </Link>
    </div>
  );
};

export default UsersCard;
