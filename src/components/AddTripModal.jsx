import React from 'react';
import { useForm } from "react-hook-form";
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';

const AddTripModal = ({ isOpen, onClose, onSubmit }) => {
  const { handleSubmit, register } = useForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add Trip</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="mission" className="block text-sm font-medium text-gray-700">Mission</label>
            <textarea {...register("mission", { required: true })} id="mission" name="mission" rows="2" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
          </div>
          <div className="mb-4 flex gap-6 items-center">
            <div className="flex-grow">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700"> Date </label>
              <input {...register("date")} type="date" id="date" name="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 " />
            </div>
            <div className="flex-grow">
              <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">Start Time</label>
              <input {...register("start_time")} type="time" id="start_time" name="start_time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
            </div>
            <div className="flex-grow">
              <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">End Time</label>
              <input {...register("end_time")} type="time" id="end_time" name="end_time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <div className="relative rounded-md">
              <GeoapifyContext apiKey="77a6a0616fbd4d22ae652b352b03f67b">
                <GeoapifyGeocoderAutocomplete
                  placeholder="Enter location here"
                  placeSelect={(d) => console.log("ours", d)}
                />
              </GeoapifyContext>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add Trip
            </button>
            <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTripModal;