import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/trips/');
      const requestData = Array.isArray(response.data) ? response.data : [];
      setRequests(requestData);
    } catch (error) {
      console.error('Error fetching booking requests:', error);
      setRequests([]); // Ensure requests is always an array even if the fetch fails
    }
  };

  const updateRequestStatus = async (id, status) => {
    try {
      await axios.put(`https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/trips/${id}`, { status });
      setRequests((prevRequests) =>
        Array.isArray(prevRequests) ? prevRequests.map((request) =>
          request.id === id ? { ...request, status } : request
        ) : []
      );
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const addRequest = (newRequest) => {
    setRequests((prevRequests) =>
      Array.isArray(prevRequests) ? [...prevRequests, newRequest] : [newRequest]
    );
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <BookingContext.Provider value={{ requests, updateRequestStatus, addRequest, fetchRequests, modalOpen, setModalOpen, selectedRequest, setSelectedRequest }}>
      {children}
    </BookingContext.Provider>
  );
};
