import { useState ,useEffect} from "react";
import baseURL from "../services/apiClient";

const useVehicles = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
     const fetchVehicles = async () => {
       const res = await fetch(`${baseURL}/api/v1/vehicles/`)
       if (res.ok) { 
        const data = await res.json();
        console.log("Vehicles: ", data)
        setData(data)
        }else{
            console.error('Failed to fetch data:', res.status);
        }
      
       
      }
      
     fetchVehicles()
     setIsLoading(false)
     
    },[])

    return {data, isLoading}

}

export default useVehicles