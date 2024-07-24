// import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import useVehicles from '../hooks/useVehicles';

const CarsCard = () => {
  const { data, isLoading } = useVehicles();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Cars</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-xs">
              <th className="pl-2">Car</th>
              <th className="pl-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="2" className="text-center p-2">Loading...</td></tr>
            ) : (
              data &&
              data.results.slice(0, 5).map((vehicle) => (
                <tr key={vehicle.url} className="bg-gray-100 h-[70px] text-gray-700 border-b text-sm">
                  <td className="pl-2 flex items-center space-x-2">
                    {vehicle.image && (
                      <img src={vehicle.image} alt={vehicle.make} className="h-[40px] w-[60px] object-cover rounded-lg" />
                    )}
                    <span>{vehicle.make} {vehicle.model}</span>
                  </td>
                  <td className="pl-2">
                    <Link
                      to={`/admin/cars/CarDetails/${(vehicle.id)}`}
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
        to="/admin/cars"
        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
      >
        View All Cars
      </Link>
    </div>
  );
};

export default CarsCard;
