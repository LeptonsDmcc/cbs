// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoMdAdd } from 'react-icons/io';
// import { FaEdit } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';
// import { FaEye } from 'react-icons/fa';
// import useVehicles from '../../../hooks/useVehicles';
// import getIDFromUrl from '../../../lib/getIDFromUrl';
// import baseURL from '../../../services/apiClient';
// import ConfirmationModal from '../../../components/ConfirmationModal';

// const Cars = () => {
//   const { data, isLoading } = useVehicles();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedVehicleId, setSelectedVehicleId] = useState(null);
//   const navigate = useNavigate();

//   const handleEdit = (vehicleId) => {
//     navigate(`/admin/cars/edit/${vehicleId}`);
//   };

//   const handleDelete = async () => {
//     const deletedProduct = await fetch(`${baseURL}/api/v1/vehicles/${selectedVehicleId}/`, {
//       method: 'DELETE',
//     });
//     console.log(`Deleted Product: ${deletedProduct}`);
//     setIsModalOpen(false);
//   };

//   const openModal = (vehicleId) => {
//     setSelectedVehicleId(vehicleId);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="p-8">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Cars</h2>
//         <Link
//           to="/admin/cars/new"
//           className="bg-[#a8cf45] p-2 h-[40px] w-[140px] rounded-sm flex gap-1 items-center justify-center hover:bg-[#94b93e] transition-colors duration-300"
//         >
//           <IoMdAdd className="text-xl" />
//           ADD CARS
//         </Link>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//               <th className="pl-6">Car Name</th>
//               <th>Model</th>
//               <th>Department</th>
//               <th className="pr-6">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               data &&
//               data.results.map((vehicle) => (
//                 <tr key={vehicle.url} className="bg-gray-100 h-[65px] text-gray-700 border-b">
//                   <td className="pl-6">{vehicle.make}</td>
//                   <td>{vehicle.model}</td>
//                   <td>{getIDFromUrl(vehicle.department).split('-')[4].toUpperCase()}</td>
//                   <td className="flex gap-2 pr-6">
//                     <button
//                       onClick={() => handleEdit(getIDFromUrl(vehicle.url))}
//                       className="p-2 text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <FaEdit />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => openModal(getIDFromUrl(vehicle.url))}
//                       className="p-2 text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <MdDelete />
//                       Delete
//                     </button>
//                     <Link
//                       to={`/admin/cars/CarDetails/${getIDFromUrl(vehicle.url)}`}
//                       className="p-2 text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <FaEye />
//                       View
//                     </Link>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       <ConfirmationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onConfirm={handleDelete}
//       />
//     </div>
//   );
// };

// export default Cars;
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import useVehicles from '../../../hooks/useVehicles';
import baseURL from '../../../services/apiClient';
import ConfirmationModal from '../../../components/ConfirmationModal';

const Cars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { data, isLoading } = useVehicles(currentPage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.count / data.pageSize));
    }
  }, [data]);

  const handleEdit = (vehicleId) => {
    navigate(`/admin/cars/edit/${vehicleId}`);
  };

  const handleDelete = async () => {
    const deletedProduct = await fetch(`${baseURL}/api/v1/vehicles/${selectedVehicleId}/`, {
      method: 'DELETE',
    });
    console.log(`Deleted Product: ${deletedProduct}`);
    setIsModalOpen(false);
  };

  const openModal = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
    setIsModalOpen(true);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8  min-h-screen">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
        <h2 className="text-4xl">Cars</h2>
        <Link
          to="/admin/cars/new"
          className="bg-[#a8cf45] p-2 h-[40px] w-[140px] rounded-md flex gap-2 items-center justify-center hover:bg-green-400 transition-colors duration-300"
        >
          <IoMdAdd className="text-xl" />
          ADD CARS
        </Link>
      </div>
      <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search cars..."
            className="p-2 border rounded-md w-1/3"
          />
          {/* <div className="flex gap-2">
            <button className="bg-gray-200 p-2 rounded-md">Sort by Name</button>
            <button className="bg-gray-200 p-2 rounded-md">Sort by Model</button>
          </div> */}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
                <th className="pl-6">Car Name</th>
                <th>Model</th>
                <th>Department</th>
                <th className="pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="text-center p-6">
                    Loading...
                  </td>
                </tr>
              ) : (
                data &&
                data.results.map((vehicle) => (
                  <tr key={vehicle.url} className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors">
                    <td className="pl-6">{vehicle.make}</td>
                    <td>{vehicle.model}</td>
                    <DepartmentName departmentId={(vehicle.department)}/>
                    <td className="flex gap-2 pr-6">
                      <button
                        onClick={() => handleEdit((vehicle.id))}
                        className="p-2 text-indigo-600 hover:text-indigo-500 duration-150 rounded-lg transition-colors"
                      >
                        <FaEdit />
                        <span className="ml-1">Edit</span>
                      </button>
                      <button
                        onClick={() => openModal((vehicle.id))}
                        className="p-2 text-red-600 hover:text-red-500 duration-150 rounded-lg transition-colors"
                      >
                        <MdDelete />
                        <span className="ml-1">Delete</span>
                      </button>
                      <Link
                        to={`/admin/cars/CarDetails/${(vehicle.id)}`}
                        className="p-2 text-green-600 hover:text-green-500 duration-150 rounded-lg transition-colors"
                      >
                        <FaEye />
                        <span className="ml-1">View</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-800 text-white p-2 rounded disabled:opacity-50 hover:bg-gray-700 transition-colors"
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-800 text-white p-2 rounded disabled:opacity-50 hover:bg-gray-700 transition-colors"
        >
          Next
        </button>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Cars;
const DepartmentName = ({ departmentId }) => {
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await fetch(`${baseURL}/api/v1/departments/${departmentId}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch department');
        }
        const departmentData = await response.json();
        setDepartment(departmentData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (departmentId) {
      fetchDepartment();
    }
  }, [departmentId]);

  if (loading) {
    return <td>Loading...</td>;
  }

  if (error) {
    return <td>Error loading department</td>;
  }

  return (
    <td>{department ? department.name : 'No Department'}</td>
  );
};
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoMdAdd } from 'react-icons/io';
// import { FaEdit } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';
// import { FaEye } from 'react-icons/fa';
// import useVehicles from '../../../hooks/useVehicles';
// import getIDFromUrl from '../../../lib/getIDFromUrl';
// import baseURL from '../../../services/apiClient';
// import ConfirmationModal from '../../../components/ConfirmationModal';

// const Cars = ({ updateCarsCount }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const { data, isLoading } = useVehicles(currentPage);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedVehicleId, setSelectedVehicleId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (data) {
//       setTotalPages(Math.ceil(data.count / data.pageSize));
//       updateCarsCount(data.count); // Update cars count
//     }
//   }, [data]);

//   const handleEdit = (vehicleId) => {
//     navigate(`/admin/cars/edit/${vehicleId}`);
//   };

//   const handleDelete = async () => {
//     const deletedProduct = await fetch(`${baseURL}/api/v1/vehicles/${selectedVehicleId}/`, {
//       method: 'DELETE',
//     });
//     console.log(`Deleted Product: ${deletedProduct}`);
//     setIsModalOpen(false);
//   };

//   const openModal = (vehicleId) => {
//     setSelectedVehicleId(vehicleId);
//     setIsModalOpen(true);
//   };

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="p-8 min-h-screen">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Cars</h2>
//         <Link
//           to="/admin/cars/new"
//           className="bg-[#a8cf45] p-2 h-[40px] w-[140px] rounded-md flex gap-2 items-center justify-center hover:bg-green-400 transition-colors duration-300"
//         >
//           <IoMdAdd className="text-xl" />
//           ADD CARS
//         </Link>
//       </div>
//       <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <input
//             type="text"
//             placeholder="Search cars..."
//             className="p-2 border rounded-md w-1/3"
//           />
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//                 <th className="pl-6">Car Name</th>
//                 <th>Model</th>
//                 <th>Department</th>
//                 <th className="pr-6">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 <tr>
//                   <td colSpan="4" className="text-center p-6">
//                     Loading...
//                   </td>
//                 </tr>
//               ) : (
//                 data &&
//                 data.results.map((vehicle) => (
//                   <tr key={vehicle.url} className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors">
//                     <td className="pl-6">{vehicle.make}</td>
//                     <td>{vehicle.model}</td>
//                     <td>{getIDFromUrl(vehicle.department).split('-')[4].toUpperCase()}</td>
//                     <td className="flex gap-2 pr-6">
//                       <button
//                         onClick={() => handleEdit(getIDFromUrl(vehicle.url))}
//                         className="p-2 text-indigo-600 hover:text-indigo-500 duration-150 rounded-lg transition-colors"
//                       >
//                         <FaEdit />
//                         <span className="ml-1">Edit</span>
//                       </button>
//                       <button
//                         onClick={() => openModal(getIDFromUrl(vehicle.url))}
//                         className="p-2 text-red-600 hover:text-red-500 duration-150 rounded-lg transition-colors"
//                       >
//                         <MdDelete />
//                         <span className="ml-1">Delete</span>
//                       </button>
//                       <Link
//                         to={`/admin/cars/CarDetails/${getIDFromUrl(vehicle.url)}`}
//                         className="p-2 text-green-600 hover:text-green-500 duration-150 rounded-lg transition-colors"
//                       >
//                         <FaEye />
//                         <span className="ml-1">View</span>
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-gray-800 text-white p-2 rounded disabled:opacity-50 hover:bg-gray-700 transition-colors"
//         >
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="bg-gray-800 text-white p-2 rounded disabled:opacity-50 hover:bg-gray-700 transition-colors"
//         >
//           Next
//         </button>
//       </div>

//       <ConfirmationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onConfirm={handleDelete}
//       />
//     </div>
//   );
// };

// export default Cars;


