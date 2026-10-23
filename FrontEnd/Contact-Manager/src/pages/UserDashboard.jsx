import axios from "axios";
import { DashboardNavbar } from "../Components/userDashboardComponents/DashboardNavbar";
import { useState, useEffect } from "react";
import Sidebar from "../Components/userDashboardComponents/Sidebar";
import ContactList from "../Components/userDashboardComponents/ContactList";
import { AddContactModal } from "../Components/userDashboardComponents/AddContactModal";
import ContactDetails from "../Components/userDashboardComponents/ContactDetails";
import { toast } from "react-toastify";
import API_BASE_URL from "../api/api";

const Userdashboard = () => {
    const [user, setUser] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);
    const [showAddContact, setShowAddContact] = useState(false);
    const [contacts,setContacts] = useState([]);
    const [showEditContact, setShowEditContact] = useState(false);
    const [currFilter, setCurrFilter] = useState("All");


    // const [isFavorite, setIsFavorite] = useState(false);

    const allCount=contacts.length;
    const favoriteCount=contacts.filter(contact=>contact.favourite).length;
    const clientsCount=contacts.filter(contact=>contact.tag==="Client").length;
    const partnersCount=contacts.filter(contact=>contact.tag==="Partner").length;
    const friendsCount=contacts.filter(contact=>contact.tag==="Friend").length;
    const workCount=contacts.filter(contact=>contact.tag==="Work").length;

    const handleDelete = async (id) => {
    try {
        const token = localStorage.getItem("token");


        await axios.delete(
            `${API_BASE_URL}/contacts/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setContacts(prevContacts =>
            prevContacts.filter(contact => contact.id !== id)
        );

        setSelectedContact(null);

        toast.success("Contact deleted successfully!");

    } catch (error) {
        console.error("Error deleting contact:", error);
    }
};

const handleFavouriteUpdate = (updatedContact) => {
    setContacts(prevContacts =>
        prevContacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        )
    );
    setSelectedContact(updatedContact);
};

const handleContactUpdated = (updatedContact) => {

    setContacts(prevContacts =>
        prevContacts.map(contact =>
            contact.id === updatedContact.id
                ? updatedContact
                : contact
        )
    );

    setSelectedContact(updatedContact);
};

    

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
                const response = await axios.get(`${API_BASE_URL}/contacts`, {
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
                const response = await axios.get(`${API_BASE_URL}/users/me`, {
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
  <div className="flex h-dvh flex-col overflow-hidden bg-gray-50">
    <DashboardNavbar user={user} />

    <main className="flex min-h-0 flex-1 overflow-hidden">
      {/* Contact list: hidden on mobile after selecting a contact */}
      <div
        className={`min-h-0 min-w-0 flex-1 flex-col overflow-hidden md:flex md:w-[340px] md:flex-none md:border-r md:border-gray-200 lg:w-[380px] ${
          selectedContact ? "hidden" : "flex"
        }`}
      >
        <ContactList
          contacts={contacts}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
          setShowAddContact={setShowAddContact}
          currFilter={currFilter}
          setCurrFilter={setCurrFilter}
          allCount={allCount}
          favoriteCount={favoriteCount}
          clientsCount={clientsCount}
          partnersCount={partnersCount}
          friendsCount={friendsCount}
          workCount={workCount}
        />
      </div>

      {/* Contact details: full screen on mobile, right panel on desktop */}
      <div
        className={`min-h-0 min-w-0 flex-1 overflow-y-auto ${
          selectedContact ? "flex" : "hidden md:flex"
        }`}
      >
        <ContactDetails
          contact={selectedContact}
          selectedContact={selectedContact}
          handleDelete={handleDelete}
          onFavoriteUpdate={handleFavouriteUpdate}
          setShowEditContact={setShowEditContact}
          showEditContact={showEditContact}
          onContactUpdated={handleContactUpdated}
          onBack={() => setSelectedContact(null)}
        />
      </div>

      {showAddContact && (
        <AddContactModal
          onClose={() => setShowAddContact(false)}
          onContactAdded={handleContactAdded}
        />
      )}
    </main>
  </div>
);

}
export default Userdashboard;