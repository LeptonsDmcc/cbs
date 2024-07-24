import { useState ,useEffect} from "react";
import baseURL from "../services/apiClient";

const useSingleVehicle = (VehicleId) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true)
     const fetchVehicle = async () => {
       const res = await fetch(`${baseURL}/api/v1/vehicles/${VehicleId}/`)
       if (res.ok) { 
        const data = await res.json();
        // console.log("Staff: ", data)
        setData(data)
        }else{
            console.error('Failed to fetch data:', res.status);
        }
      }
        fetchVehicle()
        setIsLoading(false) 
    },[VehicleId])
    return {data, isLoading}
}
export default useSingleVehicle