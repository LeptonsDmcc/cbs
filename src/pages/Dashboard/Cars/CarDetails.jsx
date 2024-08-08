import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import baseURL from '../../../services/apiClient';
import Spinner from '../../../components/Spinner';

const CarDetails = () => {
  const { vehicleId } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${baseURL}/api/v1/vehicles/${vehicleId}/`);
        if (res.ok) {
          const data = await res.json();
          setVehicle(data);
        } else {
          console.error('Failed to fetch data:', res.status);
        }
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  const handleBackClick = () => {
    navigate('../cars'); // Adjust the path according to your routing setup
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-xl">Car not found</p>
      </div>
    );
  }

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
        <p className="text-4xl ml-14">Car Details</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 px-8 lg:px-20">
        {/* Car Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:w-[60%] mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Car Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <p><span className="font-semibold">Car Make:</span> {vehicle.make}</p>
            <p><span className="font-semibold">Car Model:</span> {vehicle.model}</p>
            <p><span className="font-semibold">Car Type:</span> {vehicle.vehicle_type}</p>
            <p><span className="font-semibold">Plate Number:</span> {vehicle.license_plate}</p>
            <DepartmentName departmentId={vehicle.department} />
            <p><span className="font-semibold">Driver:</span> {vehicle.driver}</p>
          </div>
        </div>

        {/* Car Image */}
        <div className="flex justify-center items-center lg:w-[35%]">
          <img
            src={vehicle.image}
            alt="Car"
            className="rounded-lg bg-gray-50 shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading department</p>;
  }

  return (
    <p><span className="font-semibold">Department Assigned:</span> {department.name}</p>
  );
};
