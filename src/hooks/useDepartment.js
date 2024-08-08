import { useState ,useEffect} from "react";
import baseURL from "../services/apiClient";

const useDepartment = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
     const fetchDepartment = async () => {
       const res = await fetch(`${baseURL}/api/v1/departments/`)
       if (res.ok) { 
        const data = await res.json();
        console.log("Department: ", data)
        setData(data)
        }else{
            console.error('Failed to fetch data:', res.status);
        }
      
       
      }
      
     fetchDepartment()
     setIsLoading(false)
     
    },[])

    return {data, isLoading}