import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiUsers,
    FiStar,
    FiEdit,
    FiMoreHorizontal

} from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import axios from "axios";


import { GoTrash } from "react-icons/go";
import { useState, useEffect } from "react";
import { EditContactModal } from "./editContactModal";

const ContactDetails = ({ contact, handleDelete,selectedContact,setSelectedContact, setIsFavorite, isFavorite,onFavoriteUpdate,setShowEditContact,showEditContact,onContactUpdated }) => {

const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
const [contactToDelete, setContactToDelete] = useState(null);

const confirmDelete = (contact) => {
    setContactToDelete(contact);
    setShowDeleteConfirm(true);
};

const handleConfirmDelete = async () => {
    if (!contactToDelete) return;

    await handleDelete(contactToDelete.id);

    setShowDeleteConfirm(false);
    setContactToDelete(null);
};

   

    if (!contact) {

        return (
            <div className="flex-1 flex items-center justify-center text-gray-400">

                <p>
                    Select a contact to view details
                </p>

            </div>
        );

    }

   

    const handleFavorite = async () => {
        try{
            const token = localStorage.getItem("token");
                    

            const response = await axios.put(
                `http://localhost:8080/contacts/${selectedContact.id}/favorite`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }

            );

            onFavoriteUpdate(response.data);
            // setIsFavorite(response.data.favourite);
        
         
        }
        catch(error){
            console.error("Error updating favorite status:", error);
        }
    };

    return (

        <>

         {showEditContact && (
       
        <EditContactModal
            contact={contact}
            onClose={() => setShowEditContact(false)}
            onContactUpdated={onContactUpdated}
        />
    )}

        {showDeleteConfirm && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

        <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl">

            <h2 className="text-xl font-semibold text-gray-900">
                Delete Contact
            </h2>

            <p className="text-gray-500 mt-3">
                Are you sure you want to delete this contact?
            </p>

            <div className="flex justify-end gap-3 mt-6">

                <button
                    onClick={() => {
                        setShowDeleteConfirm(false);
                        setContactToDelete(null);
                    }}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer transition duration-300"
                >
                    Cancel
                </button>

                <button
                    onClick={handleConfirmDelete}
                    className="px-5 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 cursor-pointer transition duration-300"
                >
                    Yes, Delete
                </button>

            </div>
        </div>
    </div>
)}

        <div className="flex-1 p-10">

            {/* Header */}
            <div className="flex justify-between items-start">

                <div className="flex items-center gap-6">

                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0369A1] text-2xl font-semibold">

                        {contact.name
                            .split(" ")
                            .map(word => word[0])
                            .join("")
                            .toUpperCase()
                        }

                    </div>


                    <div>

                        <h1 className="text-3xl font-semibold text-gray-900">
                            {contact.name}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            {contact.email}
                        </p>

                        <span className="inline-block mt-2 bg-[#EDE9FE] text-[#6D28D9] px-3 py-1 rounded-full text-sm">
                            {contact.tag}
                        </span>

                    </div>

                </div>


                {/* Action buttons */}
                <div className="flex gap-3">

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 cursor-pointer" onClick={handleFavorite}>
                    
                        {/* <FiStar
                        className={selectedContact.isFavorite ? "text-yellow-500 fill-yellow-500" : "text-black-500"}
                        /> */}
                        {selectedContact.favourite ? <FaStar className="text-yellow-500 fill-yellow-500" />:<FiStar />}

                    </button>

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 cursor-pointer" onClick={() => setShowEditContact(!showEditContact)}>

                        <FiEdit/>

                    </button>

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 cursor-pointer" onClick={() => confirmDelete(contact)}>

                        <GoTrash />

                    </button>

                </div>

            </div>


            {/* Information cards */}
            <div className="grid grid-cols-2 gap-5 mt-12">

                {/* Email */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiMail />

                        <span className="text-sm font-medium">
                            EMAIL
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.email}
                    </p>

                </div>


                {/* Phone */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiPhone />

                        <span className="text-sm font-medium">
                            PHONE
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.phone}
                    </p>

                </div>


                {/* Location */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiMapPin />

                        <span className="text-sm font-medium">
                            LOCATION
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.address}
                    </p>

                </div>


                {/* Company */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiUsers />

                        <span className="text-sm font-medium">
                            COMPANY
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.company}
                    </p>

                </div>

            </div>

        </div>
    </> );
};
export default ContactDetails;