import axios from "axios";
import { DashboardNavbar } from "../Components/userDashboardComponents/DashboardNavbar";
import { useState, useEffect } from "react";

const Userdashboard=()=>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try { 
                const token = localStorage.getItem("token");
                console.log("Token from localStorage:", token);
                if (!token) {
                    console.error("No token found in localStorage");
                    return;
                }
                const response = await axios.get("http://localhost:8080/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                
                setUser(response.data);
            } 
            
            catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    return(
        <>
        <DashboardNavbar user={user}/>
        </>
    );
}
export default Userdashboard;