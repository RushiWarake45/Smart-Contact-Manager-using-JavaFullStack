import axios from "axios";
import { DashboardNavbar } from "../Components/userDashboardComponents/DashboardNavbar";
import { useState, useEffect } from "react";
import Sidebar from "../Components/userDashboardComponents/Sidebar";
import ContactList from "../Components/userDashboardComponents/ContactList";
import { AddContactModal } from "../Components/userDashboardComponents/AddContactModal";
import ContactDetails from "../Components/userDashboardComponents/ContactDetails";

const Userdashboard = () => {
    const [user, setUser] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);
    const [showAddContact, setShowAddContact] = useState(false);


    const [contacts,setContacts] = useState([]);

    const handleContactAdded=(newContact)=>{
      setContacts((prev)=> [
        ...prev,
        newContact
      ]);
     setSelectedContact(newContact);
    }

     useEffect(() => {
        const getContacts = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No token found in localStorage");
                    return;
                }
                const response = await axios.get("http://localhost:8080/contacts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                setContacts(response.data);
              
               
            }

            catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        getContacts();
    }, []);

    

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
                        setShowAddContact={setShowAddContact}
                    />


                    {/* Contact details */}
                    <ContactDetails
                        contact={selectedContact}
                    />

                    {showAddContact && (
                        <AddContactModal
                            onClose={() => setShowAddContact(false)}
                            onContactAdded={handleContactAdded}
                            
                        />
                    )}

                </div>

            </div>
        </>
    );
}
export default Userdashboard;