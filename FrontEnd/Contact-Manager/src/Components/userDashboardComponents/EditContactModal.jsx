
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import API_BASE_URL from "../../api/api";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiBriefcase,
    FiMapPin,
    FiTag,
} from "react-icons/fi";

export const EditContactModal = ({
    contact,
    onClose,
    onContactUpdated,
}) => {
    const [formData, setFormData] = useState({
        name: contact.name || "",
        email: contact.email || "",
        phone: contact.phone || "",
        address: contact.address || "",
        company: contact.company || "",
        tag: contact.tag || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            toast.error("Please enter contact name!");
            return;
        }

        if (formData.name.trim().length < 3) {
            toast.error("Name must contain at least 3 characters!");
            return;
        }

        if (!formData.email.trim()) {
            toast.error("Please enter email address!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email.trim())) {
            toast.error("Please enter a valid email address!");
            return;
        }

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

            const response = await axios.put(
                `${API_BASE_URL}/contacts/${contact.id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Contact updated successfully!");
            onContactUpdated(response.data);
            onClose();
        } catch (error) {
            console.log("Error updating contact:", error);
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);

            toast.error("Failed to update contact!");
        }
    };

    const inputClass =
        "w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50/70 py-3 pl-10 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#483AEA] focus:bg-white focus:ring-4 focus:ring-[#483AEA]/10";

    const labelClass =
        "mb-2 block text-sm font-medium text-gray-700";

    const fields = [
        {
            name: "email",
            label: "Email address",
            placeholder: "jane@example.com",
            icon: FiMail,
            type: "email",
        },
        {
            name: "phone",
            label: "Phone number",
            placeholder: "9876543210",
            icon: FiPhone,
            type: "tel",
        },
        {
            name: "company",
            label: "Company",
            placeholder: "Acme Corp",
            icon: FiBriefcase,
            type: "text",
        },
        {
            name: "address",
            label: "Location",
            placeholder: "Pune, Maharashtra",
            icon: FiMapPin,
            type: "text",
        },
    ];

    const tags = ["Work", "Client", "Partner", "Friend"];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/45 px-3 py-4 backdrop-blur-sm sm:px-5"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-gray-950/20 sm:rounded-3xl">

                {/* Header */}
                <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#483AEA] to-[#7165F5] px-5 py-5 sm:px-7 sm:py-6">
                    <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-white/10" />
                    <div className="absolute -bottom-16 right-24 h-28 w-28 rounded-full bg-white/10" />

                    <div className="relative flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white">
                                <FiUser className="h-5 w-5" />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                    Edit contact
                                </h2>
                                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                                    Update your contact information
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close edit contact modal"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
                        >
                            <IoClose className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleUpdate}
                    className="flex min-h-0 flex-1 flex-col"
                >
                    <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">

                        <div className="mb-5">
                            <h3 className="text-sm font-semibold text-gray-900">
                                Basic information
                            </h3>
                            <p className="mt-1 text-xs text-gray-500">
                                Keep the contact details up to date.
                            </p>
                        </div>

                        {/* Name */}
                        <div className="mb-5">
                            <label htmlFor="edit-name" className={labelClass}>
                                Full name <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <FiUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                <input
                                    id="edit-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Smith"
                                    required
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {fields.slice(0, 2).map((field) => {
                                const Icon = field.icon;

                                return (
                                    <div key={field.name} className="min-w-0">
                                        <label
                                            htmlFor={`edit-${field.name}`}
                                            className={labelClass}
                                        >
                                            {field.label}
                                            {field.name === "email" && (
                                                <span className="text-red-500"> *</span>
                                            )}
                                            {field.name === "phone" && (
                                                <span className="text-red-500"> *</span>
                                            )}
                                        </label>

                                        <div className="relative">
                                            <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                            <input
                                                id={`edit-${field.name}`}
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                required
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Company and Location */}
                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {fields.slice(2).map((field) => {
                                const Icon = field.icon;

                                return (
                                    <div key={field.name} className="min-w-0">
                                        <label
                                            htmlFor={`edit-${field.name}`}
                                            className={labelClass}
                                        >
                                            {field.label}
                                        </label>

                                        <div className="relative">
                                            <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                            <input
                                                id={`edit-${field.name}`}
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Category */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <FiTag className="h-4 w-4 text-[#483AEA]" />
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Contact category
                                    </h3>
                                    <p className="mt-0.5 text-xs text-gray-500">
                                        Choose a tag for this contact.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => {
                                    const isSelected = formData.tag === tag;

                                    return (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    tag,
                                                }))
                                            }
                                            className={`rounded-xl border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#483AEA]/20 ${
                                                isSelected
                                                    ? "border-[#483AEA] bg-[#483AEA] text-white shadow-sm shadow-[#483AEA]/20"
                                                    : "border-gray-200 bg-white text-gray-600 hover:border-[#483AEA]/40 hover:bg-[#483AEA]/5 hover:text-[#483AEA]"
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex shrink-0 flex-col-reverse gap-3 border-t border-gray-100 bg-white px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:w-auto"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#483AEA] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#483AEA]/20 transition hover:bg-[#392bc9] focus:outline-none focus:ring-4 focus:ring-[#483AEA]/20 sm:w-auto"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
