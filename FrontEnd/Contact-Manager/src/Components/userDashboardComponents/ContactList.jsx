
import { FiSearch, FiPlus, FiStar } from "react-icons/fi";
import { useState, useRef } from "react";

const ContactList = ({
    contacts,
    selectedContact,
    setSelectedContact,
    setShowAddContact,
    isFavorite,
    currFilter
}) => {
    const [search, setSearch] = useState("");

    // Reference to each alphabet section
    const sectionRefs = useRef({});

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // 1. Filter and sort contacts
    const filteredContacts = contacts
        .filter((contact) =>
            (
                currFilter === "All" ||
                contact.tag === currFilter ||
                (currFilter === "Favorite" && contact.favourite)
            ) &&
            (
                contact.name.toLowerCase().includes(search.toLowerCase()) ||
                (contact.email || "").toLowerCase().includes(search.toLowerCase()) ||
                (contact.phone || "").includes(search)
            )
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    // 2. Group contacts by their first letter
    const groupedContacts = filteredContacts.reduce((groups, contact) => {
        const firstLetter = contact.name
            .trim()
            .charAt(0)
            .toUpperCase();

        const letter = /^[A-Z]$/.test(firstLetter)
            ? firstLetter
            : "#";

        if (!groups[letter]) {
            groups[letter] = [];
        }

        groups[letter].push(contact);

        return groups;
    }, {});

    // 3. Scroll to the selected alphabet section
    const scrollToLetter = (letter) => {
        sectionRefs.current[letter]?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <div className="w-full lg:w-[400px] max-w-full border-r border-gray-200
                        h-full min-h-0 flex flex-col flex-shrink-0">

            {/* Search + Add Contact */}
            <div className="p-4 sm:p-5 border-b border-gray-200 shrink-0">

                <div className="relative">
                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2
                                   text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search contacts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full min-w-0 rounded-xl border border-gray-200
                                   px-12 py-3 sm:py-4 outline-none
                                   focus:border-[#483AEA]"
                    />
                </div>

                <button
                    onClick={() => setShowAddContact(true)}
                    className="w-full mt-3 sm:mt-4 bg-[#483AEA] text-white
                               rounded-xl py-3 sm:py-4 flex items-center
                               justify-center gap-2 hover:bg-[#392bc9]
                               cursor-pointer transition duration-300"
                >
                    <FiPlus className="w-5 h-5" />
                    Add contact
                </button>
            </div>

            {/* Alphabet index + Contact list */}
            <div className="flex-1 min-h-0 flex overflow-hidden">

                {/* A-Z column on the LEFT */}
                <div className="w-7 sm:w-8 shrink-0 flex flex-col items-center
                                justify-start overflow-y-auto py-2
                                border-r border-gray-100 [scrollbar-width:thin]
                               [scrollbar-color:#e5e7eb_transparent]">

                    {alphabet.map((letter) => {
                        const hasContacts = Boolean(groupedContacts[letter]);

                        return (
                            <button
                                key={letter}
                                disabled={!hasContacts}
                                onClick={() => scrollToLetter(letter)}
                                className={`w-full py-0.5 text-[10px] sm:text-xs
                                    font-semibold transition
                                    ${
                                        hasContacts
                                            ? "text-[#483AEA] hover:bg-[#F5F3FF] cursor-pointer"
                                            : "text-gray-300 cursor-default"
                                    }`}
                            >
                                {letter}
                            </button>
                        );
                    })}
                </div>

                {/* Scrollable contacts */}
                <div
                    className="flex-1 min-w-0 overflow-y-auto
                               [scrollbar-width:thin]
                               [scrollbar-color:#e5e7eb_transparent]"
                >
                    {filteredContacts.length === 0 ? (
                        <p className="text-center text-gray-400 p-5 text-sm">
                            No contacts found
                        </p>
                    ) : (
                        Object.keys(groupedContacts).map((letter) => (
                            <div
                                key={letter}
                                ref={(element) => {
                                    sectionRefs.current[letter] = element;
                                }}
                            >
                                {/* Alphabet heading */}
                                <div className="sticky top-0 z-10 bg-gray-50
                                                px-3 py-1.5 text-sm font-semibold
                                                text-[#483AEA] border-b
                                                border-gray-100">
                                    {letter}
                                </div>

                                {/* Contacts in this group */}
                                {groupedContacts[letter].map((contact) => (
                                    <div
                                        key={contact.id}
                                        onClick={() => setSelectedContact(contact)}
                                        className={`flex items-center gap-2 sm:gap-3
                                                    px-3 py-3 sm:px-4 sm:py-4
                                                    cursor-pointer border-b
                                                    border-gray-100 min-w-0
                                            ${
                                                selectedContact?.id === contact.id
                                                    ? "bg-[#F5F3FF] border-l-2 border-l-[#483AEA]"
                                                    : "hover:bg-gray-50"
                                            }`}
                                    >
                                        {/* Avatar */}
                                        <div className="w-10 h-10 shrink-0 rounded-full
                                                        bg-[#E0F2FE] flex items-center
                                                        justify-center text-[#0369A1]
                                                        font-semibold text-sm">
                                            {contact.name
                                                .split(" ")
                                                .map((word) => word[0])
                                                .join("")
                                                .toUpperCase()}
                                        </div>

                                        {/* Name + email */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1">
                                                <h3 className="font-medium text-gray-800
                                                               truncate text-sm sm:text-base">
                                                    {contact.name}
                                                </h3>

                                                {contact.favorite && (
                                                    <FiStar className="w-4 h-4 shrink-0
                                                                       text-yellow-500
                                                                       fill-yellow-500" />
                                                )}
                                            </div>

                                            <p className="text-xs sm:text-sm text-gray-500
                                                          truncate">
                                                {contact.email}
                                            </p>
                                        </div>

                                        {contact.favourite && (
                                            <FiStar className="w-4 h-4 shrink-0
                                                               text-yellow-500
                                                               fill-yellow-500" />
                                        )}

                                        {/* Category */}
                                        <span className="hidden sm:inline-block text-xs
                                                         bg-gray-100 text-gray-500
                                                         px-2 py-1 rounded-full
                                                         max-w-25 truncate shrink-0 w-15 align-center text-center">
                                            {contact.tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactList;