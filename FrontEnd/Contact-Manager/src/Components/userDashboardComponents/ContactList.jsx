import { FiSearch, FiPlus, FiStar } from "react-icons/fi";
import { useState } from "react";

const ContactList = ({ contacts, selectedContact, setSelectedContact, setShowAddContact, isFavorite,currFilter }) => {

    const [search, setSearch] = useState("");

    const filteredContacts = contacts.filter((contact) =>
       
        (currFilter === "All" || contact.tag === currFilter || (currFilter === "Favorite" && contact.favourite)) &&
        (contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone.includes(search))
    );


    return (
        <div className="w-[400px] border-r border-gray-200 min-h-[calc(100vh-73px)] flex flex-col min-h-0 flex-shrink-0">

            {/* Search + Add */}
            <div className="p-5 border-b border-gray-200 shrink-0">

                {/* Search */}
                <div className="relative">

                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search contacts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-12 py-4 outline-none focus:border-[#483AEA]"
                    />

                </div>

                {/* Add Contact */}
                <button onClick={() => setShowAddContact(true)}
                    className="w-full mt-4 bg-[#483AEA] text-white rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-[#392bc9]"
                >

                    <FiPlus className="w-5 h-5" />

                    Add contact

                </button>

            </div>


            {/* Contact list */}
            <div className="flex-1 overflow-y-auto [scrollbar-width:thin]
                [scrollbar-color:#e5e7eb_transparent]">
               {
                  filteredContacts.map((contact) => (

                    <div
                        key={contact.id}
                        onClick={() => setSelectedContact(contact)}
                        className={`flex items-center gap-4 px-5 py-4 cursor-pointer border-b border-gray-100 
                        ${
                            selectedContact?.id === contact.id
                                ? "bg-[#F5F3FF] border-l-2 border-l-[#483AEA]"
                                : "hover:bg-gray-50"
                        }`}
                    >

                        {/* Avatar */}
                        <div className="w-11 h-11 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0369A1] font-semibold">

                            {contact.name
                                .split(" ")
                                .map(word => word[0])
                                .join("")
                                .toUpperCase()
                            }

                        </div>


                        {/* Name + company */}
                        <div className="flex-1">

                            <div className="flex items-center gap-1">

                                <h3 className="font-medium text-gray-800">
                                    {contact.name}
                                </h3>

                                {contact.favorite && (
                                    <FiStar
                                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                    />
                                )}

                            </div>

                            <p className="text-sm text-gray-500">
                                {contact.email}
                            </p>

                        </div>
                       
                        {contact.favourite && (
                            <FiStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        )}
                       

                        {/* Category */}
                        <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full w-15">
                            {contact.tag}
                        </span>
                       
                    </div>

                ))}
                

            </div>

        </div>
    );
};

export default ContactList;