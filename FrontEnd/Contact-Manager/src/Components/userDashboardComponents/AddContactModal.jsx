
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMapPin,
  FiTag,
  FiPlus,
  FiUsers,
} from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";

export const AddContactModal = ({ onClose, onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    tag: "Work",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (!formData.name.trim()) {
      toast.error("Please enter contact name!");
      return;
    }

    if (formData.name.trim().length < 3) {
      toast.error("Name must contain at least 3 characters!");
      return;
    }

    // Email validation
    if (!formData.email.trim()) {
      toast.error("Please enter email address!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      toast.error("Please enter phone number!");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8080/contacts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onContactAdded(response.data);
      onClose();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#483AEA] focus:bg-white focus:ring-4 focus:ring-violet-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

  const tags = [
    {
      name: "Work",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "Client",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      name: "Partner",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      name: "Friend",
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-gray-900/20">
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#483AEA] to-[#7466F3] px-5 py-5 text-white sm:px-7 sm:py-6">
          <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[22px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-16 right-28 h-32 w-32 rounded-full bg-white/10" />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner sm:h-14 sm:w-14">
                <FiUser size={25} />
              </div>

              <div className="min-w-0">
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Add new contact
                </h2>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                  Add someone to your personal contact list
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="min-h-0 overflow-y-auto"
        >
          <div className="space-y-6 p-5 sm:p-7">
            {/* Section heading */}
            <div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-1 rounded-full bg-[#483AEA]" />
                <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                  Basic information
                </h3>
              </div>
              <p className="ml-3 mt-1 text-xs text-gray-400">
                Fields marked with * are required
              </p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Full name <span className="text-red-500">*</span>
              </label>

              <div className="group relative">
                <FiUser
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#483AEA]"
                />
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ritesh Jadhav"
                  required
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            {/* Email and phone */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="contact-email" className={labelClass}>
                  Email address <span className="text-red-500">*</span>
                </label>

                <div className="group relative">
                  <FiMail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#483AEA]"
                  />
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ritu@example.com"
                    required
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone number <span className="text-red-500">*</span>
                </label>

                <div className="group relative">
                  <FiPhone
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#483AEA]"
                  />
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Professional details */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-5 w-1 rounded-full bg-[#483AEA]" />
                <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                  Additional details
                </h3>
                <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                  Optional
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="contact-company" className={labelClass}>
                    Company
                  </label>

                  <div className="group relative">
                    <FiBriefcase
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#483AEA]"
                    />
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label htmlFor="contact-address" className={labelClass}>
                    Location
                  </label>

                  <div className="group relative">
                    <FiMapPin
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#483AEA]"
                    />
                    <input
                      id="contact-address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Pune, MH"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact category */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <FiTag size={17} className="text-[#483AEA]" />
                <label className="text-sm font-semibold text-gray-700">
                  Contact category
                </label>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {tags.map((tag) => {
                  const isSelected = formData.tag === tag.name;

                  return (
                    <button
                      key={tag.name}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          tag: tag.name,
                        }))
                      }
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition active:scale-[0.98] ${
                        isSelected
                          ? "border-[#483AEA] bg-violet-50 text-[#483AEA] ring-2 ring-violet-100"
                          : `border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50`
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          tag.name === "Work"
                            ? "bg-blue-500"
                            : tag.name === "Client"
                              ? "bg-emerald-500"
                              : tag.name === "Partner"
                                ? "bg-orange-500"
                                : "bg-pink-500"
                        }`}
                      />
                      {tag.name}

                      {isSelected && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#483AEA] text-white">
                          <span className="text-[10px]">✓</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="sticky bottom-0 flex flex-col-reverse gap-3 border-t border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:flex-row sm:justify-end sm:px-7">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#483AEA] to-[#6555F1] px-6 py-3 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              <FiPlus size={18} />
              Add contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
