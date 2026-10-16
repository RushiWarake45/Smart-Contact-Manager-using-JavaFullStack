
import { useState, useRef } from "react";
import {
  FiSearch,
  FiPlus,
  FiStar,
  FiFilter,
  FiCheck,
  FiX,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";

const ContactList = ({
  contacts,
  selectedContact,
  setSelectedContact,
  setShowAddContact,
  currFilter,
  setCurrFilter,
  allCount,
  favoriteCount,
  clientsCount,
  partnersCount,
  friendsCount,
  workCount,
}) => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const sectionRefs = useRef({});
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filters = [
    { name: "All", count: allCount },
    { name: "Work", count: workCount },
    { name: "Client", count: clientsCount },
    { name: "Partner", count: partnersCount },
    { name: "Friend", count: friendsCount },
    { name: "Favorite", count: favoriteCount },
  ];

  const avatarColors = [
    "bg-violet-100 text-violet-700",
    "bg-sky-100 text-sky-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
    "bg-indigo-100 text-indigo-700",
  ];

  const getInitials = (name = "?") =>
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const filteredContacts = (contacts || [])
    .filter((contact) => {
      const matchesFilter =
        currFilter === "All" ||
        (currFilter === "Favorite"
          ? contact.favourite
          : contact.tag === currFilter);

      const query = search.trim().toLowerCase();

      const matchesSearch =
        (contact.name || "").toLowerCase().includes(query) ||
        (contact.email || "").toLowerCase().includes(query) ||
        (contact.phone || "").toLowerCase().includes(query) ||
        (contact.company || "").toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );

  const groupedContacts = filteredContacts.reduce((groups, contact) => {
    const firstLetter = (contact.name || "").trim().charAt(0).toUpperCase();
    const letter = /^[A-Z]$/.test(firstLetter) ? firstLetter : "#";

    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(contact);

    return groups;
  }, {});

  const scrollToLetter = (letter) => {
    sectionRefs.current[letter]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-white">
      {/* Top panel */}
      <div className="shrink-0 border-b border-gray-100 bg-white p-4 sm:p-5">
        {/* Heading */}
        {/* <div className="mb-5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Contacts
            </h2>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Your people, all in one place
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-[#483AEA]">
            <FiUsers size={21} />
          </div>
        </div> */}

        {/* Search + filter */}
        <div className="flex items-center gap-2">
          <div className="group relative min-w-0 flex-1">
            <FiSearch
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#483AEA]"
            />

            <input
              type="text"
              placeholder="Search name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search contacts"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50/80 py-3 pl-10 pr-9 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#483AEA] focus:bg-white focus:ring-4 focus:ring-violet-100"
            />

            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* Filter dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setShowFilters((previous) => !previous)}
              aria-label="Filter contacts"
              aria-expanded={showFilters}
              className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border transition active:scale-95 ${
                showFilters || currFilter !== "All"
                  ? "border-violet-200 bg-violet-50 text-[#483AEA]"
                  : "border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50 hover:text-[#483AEA]"
              }`}
            >
              <FiFilter size={19} />

              {currFilter !== "All" && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#483AEA]" />
              )}
            </button>

            {showFilters && (
              <>
                <button
                  type="button"
                  aria-label="Close filter menu"
                  className="fixed inset-0 z-20 cursor-default"
                  onClick={() => setShowFilters(false)}
                />

                <div className="absolute right-0 top-full z-30 mt-3 w-60 origin-top-right rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/70">
                  <div className="px-3 pb-2 pt-3">
                    <p className="text-sm font-bold text-gray-800">
                      Filter contacts
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Choose a category
                    </p>
                  </div>

                  {filters.map((filter) => (
                    <button
                      type="button"
                      key={filter.name}
                      onClick={() => {
                        setCurrFilter(filter.name);
                        setShowFilters(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition ${
                        currFilter === filter.name
                          ? "bg-violet-50 font-semibold text-[#483AEA]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {filter.name === "Favorite" ? (
                          <FiStar size={16} />
                        ) : (
                          <FiUsers size={16} />
                        )}
                        {filter.name}
                      </span>

                      <span className="flex items-center gap-2">
                        <span
                          className={`rounded-lg px-2 py-0.5 text-xs ${
                            currFilter === filter.name
                              ? "bg-white text-[#483AEA]"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {filter.count ?? 0}
                        </span>

                        {currFilter === filter.name && (
                          <FiCheck size={16} />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Active filter + result count */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate text-sm font-bold text-gray-800">
              {currFilter === "All" ? "All contacts" : currFilter}
            </span>

            <span className="rounded-lg bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">
              {filteredContacts.length}
            </span>
          </div>

          {currFilter !== "All" && (
            <button
              type="button"
              onClick={() => setCurrFilter("All")}
              className="shrink-0 text-xs font-semibold text-[#483AEA] transition hover:text-[#3525c5]"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Add contact */}
        <button
          type="button"
          onClick={() => setShowAddContact(true)}
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#483AEA] to-[#6555F1] py-3.5 text-sm font-bold text-white shadow-md shadow-violet-200/70 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-200 active:translate-y-0"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/20">
            <FiPlus size={17} />
          </span>
          Add new contact
        </button>
      </div>

      {/* Contacts list */}
      <div className="flex min-h-0 flex-1 overflow-hidden bg-white">
        {/* Alphabet index */}
        <div className="flex w-7 shrink-0 flex-col items-center overflow-y-auto border-r border-gray-100 bg-gray-50/60 py-2 [scrollbar-width:none] sm:w-8">
          {alphabet.map((letter) => {
            const hasContacts = Boolean(groupedContacts[letter]);

            return (
              <button
                type="button"
                key={letter}
                disabled={!hasContacts}
                onClick={() => scrollToLetter(letter)}
                aria-label={`Jump to ${letter}`}
                className={`w-full py-1 text-[10px] font-bold transition sm:text-xs ${
                  hasContacts
                    ? "cursor-pointer text-[#483AEA] hover:bg-violet-100"
                    : "cursor-default text-gray-300"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Scrollable contact rows */}
        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#e5e7eb_transparent]">
          {filteredContacts.length === 0 ? (
            <div className="flex min-h-full flex-col items-center justify-center px-5 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-50 text-2xl text-[#483AEA]">
                <FiSearch />
              </div>

              <h3 className="mt-4 text-base font-bold text-gray-800">
                No contacts found
              </h3>

              <p className="mt-1 max-w-52 text-sm leading-6 text-gray-500">
                {search
                  ? "Try a different name, email, or phone number."
                  : "There are no contacts in this category yet."}
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-4 rounded-xl bg-violet-50 px-4 py-2 text-sm font-semibold text-[#483AEA] transition hover:bg-violet-100"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            Object.keys(groupedContacts).map((letter) => (
              <div
                key={letter}
                ref={(element) => {
                  sectionRefs.current[letter] = element;
                }}
                className="scroll-mt-0"
              >
                <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-gray-100 bg-gray-50/95 px-3 py-2.5 text-xs font-bold text-gray-500 backdrop-blur-md sm:px-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-100 text-[#483AEA]">
                    {letter}
                  </span>
                  <span>
                    {groupedContacts[letter].length}{" "}
                    {groupedContacts[letter].length === 1
                      ? "contact"
                      : "contacts"}
                  </span>
                </div>

                {groupedContacts[letter].map((contact) => {
                  const isSelected =
                    selectedContact?.id === contact.id;

                  const colorIndex =
                    (contact.name || "")
                      .split("")
                      .reduce((sum, char) => sum + char.charCodeAt(0), 0) %
                    avatarColors.length;

                  return (
                    <button
                      type="button"
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      aria-pressed={isSelected}
                      className={`group relative flex w-full min-w-0 items-center gap-3 border-b border-gray-100/80 px-3 py-3.5 text-left transition sm:gap-3.5 sm:px-4 ${
                        isSelected
                          ? "bg-violet-50/90"
                          : "hover:bg-gray-50/80"
                      }`}
                    >
                      {/* Selected indicator */}
                      {isSelected && (
                        <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-[#483AEA]" />
                      )}

                      {/* Avatar */}
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition ${
                          isSelected
                            ? "bg-[#483AEA] text-white shadow-md shadow-violet-200"
                            : avatarColors[colorIndex]
                        }`}
                      >
                        {getInitials(contact.name)}
                      </div>

                      {/* Name and email */}
                      <div className="min-w-0 flex-1">
                        <div className="flex min-w-0 items-center gap-1.5">
                          <p
                            className={`truncate text-sm font-bold sm:text-[15px] ${
                              isSelected
                                ? "text-[#483AEA]"
                                : "text-gray-800"
                            }`}
                          >
                            {contact.name || "Unnamed contact"}
                          </p>

                          {contact.favourite && (
                            <FiStar
                              aria-label="Favorite contact"
                              className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-500"
                            />
                          )}
                        </div>

                        <p className="mt-1 truncate text-xs text-gray-500 sm:text-sm">
                          {contact.phone || "No contact information"}
                        </p>
                      </div>

                      {/* Category */}
                      <div className="flex shrink-0 flex-col items-end gap-1">
                        <span
                          className={`max-w-20 truncate rounded-lg px-2 py-1 text-[10px] font-semibold sm:max-w-24 sm:text-xs ${
                            isSelected
                              ? "bg-white text-[#483AEA]"
                              : "bg-gray-100 text-gray-500 group-hover:bg-white"
                          }`}
                        >
                          {contact.tag || "Other"}
                        </span>

                        <FiArrowUpRight
                          size={14}
                          className={`transition ${
                            isSelected
                              ? "text-[#483AEA]"
                              : "text-gray-300 group-hover:text-gray-500"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactList;
