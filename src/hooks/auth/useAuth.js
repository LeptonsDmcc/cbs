// import {useState } from "react";
// import axios from 'axios';

// const useAuth = () => {
//   const [error, setError] = useState('');
//   const [user, setUser] = useState(null);

 
//     const login = async (email, username, password) => {
//         try {
//           const response = await axios.post('https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/staff/login/', {
//             email,
//             username,
//             password
//           });
    
//           console.log(response)
    
    
    
//           if (response.status == 200) {
//             const userData = response.data
//             setUser({
//               id: userData.id,
//               username: userData.username,
//               email: userData.email
//             })
          
//           } else {
//             setError('Incorrect email or password. Please try again.');
//           }
//         } catch (err) {
//           console.error(err);
//           setError('An error occurred. Please try again.');
//         }
//       };

//       return {
//         login,
//         user,
//         error
//       }
// }

// export default useAuth

import axios from "axios";
import { isAxiosError } from "axios";
import { create } from "zustand";

const defaultValues = {
  user: undefined,
  isAuthenticated: false,
  isAuthenticating: false,
};

const useAuth = create((set) => ({
  ...defaultValues,

  signIn: async (email, password, cb) => {
    let errorMessage = "";

    set((store) => ({
      ...store,
      isAuthenticating: true,
    }));

    try {
      const response = await axios.post('https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/staff/login/', {
        email,
        password
      });

      if (response.status === 200) {
        const userData = response.data.user;
        set((store) => ({
          ...store,
          user: {
            id: userData.id,
            access: response.data.access,
            first_name: userData.first_name,
            last_name: userData.last_name,
            username: userData.username,
            email: userData.email,
            department: userData.department,
            phone: userData.phone,
          },
          isAuthenticated: true,
          isAuthenticating: false,
        }));
      } else {
        errorMessage = 'Incorrect email or password. Please try again.';
      }
    } catch (error) {
      errorMessage = "Something went wrong";

      if (isAxiosError(error)) {
        errorMessage =
          error.response?.data.password ||
          error.response?.data.non_field_errors[0] ||
          error.message;
      }

      set((store) => ({
        ...store,
        isAuthenticated: false,
        isAuthenticating: false,
      }));
    }

    cb(errorMessage);
  },

  signOut: () => {
    // Clear user data and reset authentication state
    set(() => defaultValues);
  },
}));

export default useAuth;
