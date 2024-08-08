// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoMdAdd } from 'react-icons/io';
// import { FaEdit } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';
// import { FaEye } from 'react-icons/fa';
// import useStaff from '../../../hooks/useStaff';
// import getIDFromUrl from '../../../lib/getIDFromUrl';
// import baseURL from '../../../services/apiClient';
// import ConfirmationModal from '../../../components/ConfirmationModal';

// const Users = () => {
//   const { data, isLoading } = useStaff();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedStaffId, setSelectedStaffId] = useState(null);
//   const navigate = useNavigate();

//   const handleEdit = (userId) => {
//     navigate(`/admin/users/edit/${userId}`);
//   };

//   const handleDelete = async () => {
//     const deletedProduct = await fetch(`${baseURL}/api/v1/staff/${selectedStaffId}/`, {
//       method: 'DELETE',
//     });
//     console.log(`Deleted Product: ${deletedProduct}`);
//     setIsModalOpen(false);
//   };

//   const openModal = (staffId) => {
//     setSelectedStaffId(staffId);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="p-8">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Users</h2>
//         <Link
//           to="/admin/users/add"
//           className="bg-[#a8cf45] p-2 h-[40px] w-[140px] rounded-sm flex gap-1 items-center justify-center hover:bg-[#94b93e] transition-colors duration-300"
//         >
//           <IoMdAdd className="text-xl" />
//           ADD USER
//         </Link>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//               <th className="pl-6">Name</th>
//               <th>Email</th>
//               <th>Department</th>
//               <th className="pr-6">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               data &&
//               data.results.map((staff) => (
//                 <tr key={staff.url} className="bg-gray-100 h-[65px] text-gray-700 border-b">
//                   <td className="pl-6">{staff.first_name} {staff.last_name}</td>
//                   <td>{staff.email}</td>
//                   <td>{getIDFromUrl(staff.department).split('-')[4].toUpperCase()}</td>
//                   <td className="flex gap-2 pr-6">
//                     <button
//                       onClick={() => handleEdit(getIDFromUrl(staff.url))}
//                       className="p-2 text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <FaEdit />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => openModal(getIDFromUrl(staff.url))}
//                       className="p-2 text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <MdDelete />
//                       Delete
//                     </button>
//                     <Link
//                       to={`/admin/users/UserDetails/${getIDFromUrl(staff.url)}`}
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

// export default Users;

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoMdAdd } from 'react-icons/io';
// import { FaEdit } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';
// import { FaEye } from 'react-icons/fa';
// import useStaff from '../../../hooks/useStaff';
// import getIDFromUrl from '../../../lib/getIDFromUrl';
// import baseURL from '../../../services/apiClient';
// import ConfirmationModal from '../../../components/ConfirmationModal';
// import Pagination from '../../../components/Pagination';

// const Users = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const { data, isLoading } = useStaff(currentPage);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedStaffId, setSelectedStaffId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (data) {
//       setTotalPages(Math.ceil(data.count / data.pageSize));
//     }
//   }, [data]);

//   const handleEdit = (userId) => {
//     navigate(`/admin/users/edit/${userId}`);
//   };

//   const handleDelete = async () => {
//     const deletedProduct = await fetch(`${baseURL}/api/v1/staff/${selectedStaffId}/`, {
//       method: 'DELETE',
//     });
//     console.log(`Deleted Product: ${deletedProduct}`);
//     setIsModalOpen(false);
//   };

//   const openModal = (staffId) => {
//     setSelectedStaffId(staffId);
//     setIsModalOpen(true);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="p-8">
//       <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-800 text-white font-semibold rounded-lg px-6 mb-6">
//         <h2 className="text-4xl">Users</h2>
//         <Link
//           to="/admin/users/add"
//           className="bg-[#a8cf45] p-2 h-[40px] w-[140px] rounded-sm flex gap-1 items-center justify-center hover:bg-[#94b93e] transition-colors duration-300"
//         >
//           <IoMdAdd className="text-xl" />
//           ADD USER
//         </Link>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white shadow-lg rounded-lg">
//           <thead>
//             <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
//               <th className="pl-6">Name</th>
//               <th>Email</th>
//               <th>Department</th>
//               <th className="pr-6">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               data &&
//               data.results.map((staff) => (
//                 <tr key={staff.url} className="bg-gray-100 h-[65px] text-gray-700 border-b">
//                   <td className="pl-6">{staff.first_name} {staff.last_name}</td>
//                   <td>{staff.email}</td>
//                   <td>{getIDFromUrl(staff.department).split('-')[4].toUpperCase()}</td>
//                   <td className="flex gap-2 pr-6">
//                     <button
//                       onClick={() => handleEdit(getIDFromUrl(staff.url))}
//                       className="p-2 text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <FaEdit />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => openModal(getIDFromUrl(staff.url))}
//                       className="p-2 text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <MdDelete />
//                       Delete
//                     </button>
//                     <Link
//                       to={`/admin/users/UserDetails/${getIDFromUrl(staff.url)}`}
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
      
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-gray-800 text-white p-2 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="bg-gray-800 text-white p-2 rounded disabled:opacity-50"
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

// export default Users;
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import useManageStaff from '../../../hooks/useManageStaff';
import baseURL from '../../../services/apiClient';
import ConfirmationModal from '../../../components/ConfirmationModal';


const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { data, isLoading } = useManageStaff();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaffId, setSelectedStaffId] = useState(null);
  const navigate = useNavigate();

  console.log("data",data)
  
  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.count / data.pageSize));
    }
  }, [data]);

  const handleEdit = (userId) => {
    navigate(`/admin/users/edit/${userId}`);
  };

  const handleDelete = async () => {
    const deletedProduct = await fetch(`${baseURL}/api/v1/staff/${selectedStaffId}/`, {
      method: 'DELETE',
    });
    console.log(`Deleted Product: ${deletedProduct}`);
    setIsModalOpen(false);
  };

  const openModal = (staffId) => {
    setSelectedStaffId(staffId);
    setIsModalOpen(true);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8  min-h-screen">
      <div className="shadow-lg flex items-center justify-between h-[72px] bg-gray-900 text-white font-semibold rounded-lg px-6 mb-6">
        <h2 className="text-4xl">Users</h2>
        <Link
          to="/admin/users/add"
          className="bg-[#a8cf45] p-2 h-[40px] w-[140px] rounded-md flex gap-2 items-center justify-center hover:bg-green-400 transition-colors duration-300"
        >
          <IoMdAdd className="text-xl" />
          ADD USER
        </Link>
      </div>
      <div className="shadow-lg p-4 bg-white rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="p-2 border rounded-md w-1/3"
          />
          <div className="flex gap-2">
            <button className="bg-gray-200 p-2 rounded-md">Sort by Name</button>
            <button className="bg-gray-200 p-2 rounded-md">Sort by Department</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-300 h-[50px] text-left text-gray-700 uppercase text-sm">
                <th className="pl-6">Name</th>
                <th>Email</th>
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
                data.results.map((staff) => (
                  <tr key={staff.id} className="bg-gray-100 h-[65px] text-gray-700 border-b hover:bg-gray-50 transition-colors">
                    <td className="pl-6">{staff.first_name} {staff.last_name}</td>
                    <td>{staff.email}</td>
                    <DepartmentName departmentId={staff.department}/>
                    <td className="flex gap-2 pr-6">
                      <button
                        onClick={() => handleEdit((staff.id))}
                        className="p-2 text-indigo-600 hover:text-indigo-500 duration-150 rounded-lg transition-colors"
                      >
                        <FaEdit />
                        <span className="ml-1">Edit</span>
                      </button>
                      <button
                        onClick={() => openModal((staff.id))}
                        className="p-2 text-red-600 hover:text-red-500 duration-150 rounded-lg transition-colors"
                      >
                        <MdDelete />
                        <span className="ml-1">Delete</span>
                      </button>
                      <Link
                        to={`/admin/users/UserDetails/${(staff.id)}`}
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

export default Users;
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
