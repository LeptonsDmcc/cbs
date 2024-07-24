import { useState ,useEffect} from "react";
import baseURL from "../services/apiClient";

const useSingleStaff = (staffId) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true)
     const fetchStaff = async () => {
       const res = await fetch(`${baseURL}/api/v1/staff/${staffId}/`)
       if (res.ok) { 
        const data = await res.json();
        // console.log("Staff: ", data)
        setData(data)
        }else{
            console.error('Failed to fetch data:', res.status);
        }
      }
        fetchStaff()
        setIsLoading(false) 
    },[staffId])
    return {data, isLoading}
}
export default useSingleStaff