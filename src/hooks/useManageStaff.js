// import { useState ,useEffect} from "react";
// import baseURL from "../services/apiClient";
// import useAuth from "./auth/store";

// const useManageStaff = () => {
//     const [data, setData] = useState();
//     const [isLoading, setIsLoading] = useState(false);
//     const {user: {access}}= useAuth();


//     useEffect(() => {
//     setIsLoading(true)
//      const fetchStaff = async () => {
//        const res = await fetch(`${baseURL}/api/v1/manage/staff/`, {
//         headers: {
//             "Authorization": "Bearer " + access
//         }

//        })
//        if (res.ok) { 
//         const data = await res.json();
//         console.log("Staff: ", data)
//         setData(data)
//         }else{
//             console.error('Failed to fetch data:', res.status);
//         }
      
       
//       }
      
//      fetchStaff()
//      setIsLoading(false)
     
//     },[])

//     return {data, isLoading}

// }

// export default useManageStaff
import { useState, useEffect } from "react";
import baseURL from "../services/apiClient";
import useAuth from "./auth/store";

const useManageStaff = () => {
    const [data, setData] = useState(null); // Default state should be null or an appropriate initial value
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const fetchStaff = async () => {
            if (!user || !user.access) {
                console.error("Access token is not available");
                return;
            }
            
            setIsLoading(true);
            try {
                const res = await fetch(`${baseURL}/api/v1/manage/staff/`, {
                    headers: {
                        "Authorization": `Bearer ${user.access}`
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    console.log("Staff: ", data);
                    setData(data);
                } else {
                    console.error('Failed to fetch data:', res.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStaff();
    }, [user]); // Include 'user' as a dependency if it can change

    return { data, isLoading };
};

export default useManageStaff;

