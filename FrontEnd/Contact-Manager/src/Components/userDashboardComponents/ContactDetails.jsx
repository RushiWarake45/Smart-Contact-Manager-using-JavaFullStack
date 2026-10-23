
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUsers,
  FiStar,
  FiEdit,
  FiArrowLeft,
  FiBriefcase,
  FiTag,
  FiExternalLink,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
// import { EditContactModal } from "./EditContactModal";
import {EditContactModal} from "./EditContactModal";
import API_BASE_URL from "../../api/api";

const ContactDetails = ({
  contact,
  handleDelete,
  selectedContact,
  setSelectedContact,
  setIsFavorite,
  isFavorite,
  onFavoriteUpdate,
  setShowEditContact,
  showEditContact,
  onContactUpdated,
  onBack,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const confirmDelete = (contact) => {
    setContactToDelete(contact);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (!contactToDelete) return;

    try {
      await handleDelete(contactToDelete.id);
      setShowDeleteConfirm(false);
      setContactToDelete(null);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleFavorite = async () => {
    if (!selectedContact) return;

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_BASE_URL}/contacts/${selectedContact.id}/favorite`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onFavoriteUpdate(response.data);
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  if (!contact) {
    return (
      <main className="flex min-h-[300px] flex-1 items-center justify-center bg-gradient-to-br from-violet-50/70 via-white to-indigo-50/60 p-6 text-center">
        <div className="max-w-sm">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#483AEA] to-indigo-400 text-3xl text-white shadow-lg shadow-violet-200">
            <FiUsers />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Your contact details
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Select a contact from your list to view their information here.
          </p>
        </div>
      </main>
    );
  }

  const initials = (contact.name || "?")
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const information = [
    {
      label: "Email address",
      value: contact.email,
      icon: FiMail,
      color: "bg-violet-100 text-violet-600",
    },
    {
      label: "Phone number",
      value: contact.phone,
      icon: FiPhone,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Location",
      value: contact.address,
      icon: FiMapPin,
      color: "bg-orange-100 text-orange-600",
    },
    {
      label: "Company",
      value: contact.company,
      icon: FiBriefcase,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <>
      {showEditContact && (
        <EditContactModal
          contact={contact}
          onClose={() => setShowEditContact(false)}
          onContactUpdated={onContactUpdated}
        />
      )}

      {/* Delete confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl sm:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-500">
              <GoTrash />
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Delete contact?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-700">
                {contactToDelete?.name || "this contact"}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setContactToDelete(null);
                }}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDelete}
                className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-[0.98]"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="min-w-0 w-full flex-1 overflow-y-auto bg-[#F7F7FC] p-3 sm:p-5 lg:p-8">
        <div className="mx-auto max-w-5xl">
          {/* Mobile back button */}
          <button
            type="button"
            onClick={onBack}
            className="mb-4 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-violet-100 hover:text-[#483AEA] md:hidden"
          >
            <FiArrowLeft size={18} />
            Back to contacts
          </button>

          {/* Profile hero */}
          <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#483AEA] via-[#5847E8] to-[#8172F3] p-5 text-white shadow-lg shadow-violet-200/60 sm:p-7 lg:p-9">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-52 w-52 rounded-full border-[28px] border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 right-24 -z-10 h-44 w-44 rounded-full bg-white/10" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-3xl border border-white/40 bg-white/20 text-2xl font-bold text-white shadow-inner backdrop-blur-sm sm:h-24 sm:w-24 sm:text-3xl">
                  {initials}
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Contact profile
                  </p>
                  <h1 className="break-words text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                    {contact.name}
                  </h1>
                  <p className="mt-2 break-all text-sm text-white/80">
                    {contact.email || "No email added"}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      <FiTag size={12} />
                      {contact.tag || "Uncategorized"}
                    </span>

                    {contact.favourite && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-300/20 px-3 py-1 text-xs font-semibold text-amber-100">
                        <FaStar />
                        Favorite
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <button
                  type="button"
                  title={contact.favourite ? "Remove favorite" : "Add favorite"}
                  aria-label="Toggle favorite"
                  onClick={handleFavorite}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition active:scale-95 ${
                    contact.favourite
                      ? "border-amber-200 bg-amber-300 text-amber-900"
                      : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {contact.favourite ? (
                    <FaStar size={18} />
                  ) : (
                    <FiStar size={19} />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowEditContact(!showEditContact)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-95"
                >
                  <FiEdit size={16} />
                  <span>Edit</span>
                </button>

                <button
                  type="button"
                  title="Delete contact"
                  aria-label="Delete contact"
                  onClick={() => confirmDelete(contact)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white transition hover:border-red-200 hover:bg-red-500 active:scale-95"
                >
                  <GoTrash size={18} />
                </button>
              </div>
            </div>
          </section>

          {/* Quick contact actions */}
          <section className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            <a
              href={contact.phone ? `tel:${contact.phone}` : undefined}
              onClick={(event) => {
                if (!contact.phone) event.preventDefault();
              }}
              className={`group flex min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition sm:p-5 ${
                contact.phone
                  ? "hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
                  : "cursor-not-allowed opacity-60"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-[#483AEA] transition group-hover:bg-[#483AEA] group-hover:text-white">
                <FiPhone size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-800">Call</p>
                <p className="mt-1 truncate text-xs text-gray-500">
                  {contact.phone || "No phone number"}
                </p>
              </div>
            </a>

            <a
              href={
                contact.email
                  ? `mailto:${contact.email}`
                  : undefined
              }
              onClick={(event) => {
                if (!contact.email) event.preventDefault();
              }}
              className={`group flex min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition sm:p-5 ${
                contact.email
                  ? "hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
                  : "cursor-not-allowed opacity-60"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <FiMail size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-800">Email</p>
                <p className="mt-1 truncate text-xs text-gray-500">
                  {contact.email || "No email address"}
                </p>
              </div>
            </a>
          </section>

          {/* Information section */}
          <section className="mt-7 sm:mt-9">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                  Contact information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Personal and professional details
                </p>
              </div>
              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-[#483AEA] sm:flex">
                <FiUsers size={19} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {information.map(({ label, value, icon: Icon, color }) => (
                <article
                  key={label}
                  className="group min-w-0 rounded-2xl border border-gray-100/90 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${color}`}
                    >
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {label}
                      </p>
                      <p className="mt-2 break-words text-sm font-semibold leading-6 text-gray-800 [overflow-wrap:anywhere] sm:text-base">
                        {value || "Not provided"}
                      </p>
                    </div>

                    {value && (
                      <FiExternalLink
                        size={15}
                        className="mt-1 shrink-0 text-gray-300 transition group-hover:text-[#483AEA]"
                      />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Category card */}
          <section className="mt-5 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-indigo-50 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#483AEA] shadow-sm">
                <FiTag size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
                  Contact category
                </p>
                <p className="mt-1 break-words text-sm font-bold text-gray-800">
                  {contact.tag || "Uncategorized"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContactDetails;
