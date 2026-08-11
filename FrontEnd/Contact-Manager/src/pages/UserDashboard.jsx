import axios from "axios";
import { DashboardNavbar } from "../Components/userDashboardComponents/DashboardNavbar";
import { useState, useEffect } from "react";
import Sidebar from "../Components/userDashboardComponents/Sidebar";
import ContactList from "../Components/userDashboardComponents/ContactList";
import ContactDetails from "../Components/userDashboardComponents/ContactDetails";

const Userdashboard = () => {
    const [user, setUser] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);

    // Temporary contact data
    const [contacts] = useState([

        {
            id: 1,
            name: "Sarah Chen",
            email: "sarah@designco.com",
            phone: "+1 212 555 1234",
            address: "New York, NY",
            company: "DesignCo",
            category: "Work",
            favorite: true
        },

        {
            id: 2,
            name: "Marcus Webb",
            email: "marcus@webbconsult.com",
            phone: "+1 212 554 9901",
            address: "New York, NY",
            company: "Webb Consulting",
            category: "Client",
            favorite: false
        },

        {
            id: 3,
            name: "Priya Nair",
            email: "priya@nexahealth.com",
            phone: "+91 9876543210",
            address: "Pune, India",
            company: "NexaHealth",
            category: "Work",
            favorite: true
        },

        {
            id: 4,
            name: "Luca Ferretti",
            email: "luca@milanoarch.com",
            phone: "+39 123456789",
            address: "Milan, Italy",
            company: "Milano Arch",
            category: "Partner",
            favorite: false
        },

        {
            id: 5,
            name: "Jordan Blake",
            email: "jordan@blakestudio.com",
            phone: "+1 555 123456",
            address: "Boston, USA",
            company: "Blake Studios",
            category: "Friend",
            favorite: false
        }

    ]);





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

    return (
        <>
            <div className="h-screen flex flex-col">

                <DashboardNavbar user={user} />

                {/* Dashboard */}
                <div className="flex min-h-[calc(100vh-73px)]">

                    {/* Left sidebar */}
                    <Sidebar />


                    {/* Contact list */}
                    <ContactList
                        contacts={contacts}
                        selectedContact={selectedContact}
                        setSelectedContact={setSelectedContact}
                    />


                    {/* Contact details */}
                    <ContactDetails
                        contact={selectedContact}
                    />

                </div>

            </div>
        </>
    );
}
export default Userdashboard;