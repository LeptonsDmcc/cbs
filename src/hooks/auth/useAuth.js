import {useState } from "react";
import axios from 'axios';

const useAuth = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

 
    const login = async (email, username, password) => {
        try {
          const response = await axios.post('https://leptons-cbs-dnkfu.ondigitalocean.app/api/v1/staff/login/', {
            email,
            username,
            password
          });
    
          console.log(response)
    
    
    
          if (response.status == 200) {
            const userData = response.data
            setUser({
              id: userData.id,
              username: userData.username,
              email: userData.email
            })
          
          } else {
            setError('Incorrect email or password. Please try again.');
          }
        } catch (err) {
          console.error(err);
          setError('An error occurred. Please try again.');
        }
      };

      return {
        login,
        user,
        error
      }
}

export default useAuth