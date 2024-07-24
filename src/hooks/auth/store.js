import axios from "axios";
import { isAxiosError } from "axios";
import {create} from "zustand";

const defaultValues = {
  user: undefined,
  isAuthenticated: false,
  isAuthenticating: false,
};

const useAuth = create((set) => {
  return {
    ...defaultValues,

    signIn: async (email,username, password, cb) => {
      let errorMessage = "";

      set((store) => ({
        ...store,
        isAuthenticating: true,
      }));

      try {
        const response = await axios.post('https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/staff/login/', {
            email,
            username,
            password
          });
    
          console.log("LOVE", response)
    
          if (response.status == 200) {
            const userData = response.data.user
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
                    phone: userData.phone
                  },
                isAuthenticated: true,
                isAuthenticating: false,
              }));
          
          } else {
            errorMessage  =('Incorrect email or password. Please try again.');
          }

      } catch (error) {
        errorMessage = "Something went wrong";

        if (isAxiosError(error)) {
          set((store) => ({
            ...store,

            isAuthenticated: false,
            isAuthenticating: false,
          }));

          errorMessage =
            error.response?.data.password ||
            error.response?.data.non_field_errors[0] ||
            error.message;
        }

        set((store) => ({
          ...store,
          isAuthenticating: false,
        }));
      }

      cb(errorMessage);
    },

    signOut: () => {
      set(() => defaultValues);
    },

  };
});

export default useAuth;