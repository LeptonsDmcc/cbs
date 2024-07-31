import { useState ,useEffect} from "react";
import baseURL from "../services/apiClient";

const useTrips = (tripId) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
     const fetchTrips = async () => {
       const res = await fetch(`${baseURL}/api/v1/trips/${tripId}/`)
       if (res.ok) { 
        const data = await res.json();
        console.log("Bookings: ", data)
        setData(data)
        } else{
            console.error('Failed to fetch data:', res.status);
        }
      
       
      }
      
     fetchTrips()
     setIsLoading(false)
     
    },[tripId])

    return {data, isLoading}

}

export default useTrips