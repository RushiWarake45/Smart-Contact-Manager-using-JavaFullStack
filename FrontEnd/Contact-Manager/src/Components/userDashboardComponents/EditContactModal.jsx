import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";


export const EditContactModal = ({
    contact,
    onClose,
    onContactUpdated
}) => {

    const [formData, setFormData] = useState({
        name: contact.name || "",
        email: contact.email || "",
        phone: contact.phone || "",
        address: contact.address || "",
        company: contact.company || "",
        tag: contact.tag || ""
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleUpdate = async (e) => {

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

    // Phone validation (10-digit Indian mobile number)
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
                `http://localhost:8080/contacts/${contact.id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
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


    return (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
       
                   {/* Modal */}
                   <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
       
                       {/* Header */}
                       <div className="flex items-center justify-between border-b border-gray-200 px-7 py-4">
       
                           <h2 className="text-2xl font-semibold text-gray-900">
                               Edit contact
                           </h2>
       
                           <button
                               type="button"
                               onClick={onClose}
                               className="text-gray-500 hover:text-gray-900 cursor-pointer transition duration-300"
                           >
                               <IoClose className="w-6 h-6" />
                           </button>
       
                       </div>
       
                       <form onSubmit={handleUpdate}>
       
                           <div className="px-7 py-5">
       
                               {/* Name */}
                               <div className="mb-4">
       
                                   <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                       Full name *
                                   </label>
       
                                   <input
                                       type="text"
                                       name="name"
                                       value={formData.name}
                                       onChange={handleChange}
                                       placeholder="Jane Smith"
                                       required
                                       className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/10"
                                   />
       
                               </div>
       
       
                               {/* Email + Phone */}
                               <div className="grid grid-cols-2 gap-4 mb-4">
       
                                   <div>
       
                                       <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                           Email
                                       </label>
       
                                       <input
                                           type="email"
                                           name="email"
                                           value={formData.email}
                                           onChange={handleChange}
                                           placeholder="jane@example.com"
                                           className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/10"
                                       />
       
                                   </div>
       
       
                                   <div>
       
                                       <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                           Phone
                                       </label>
       
                                       <input
                                           type="text"
                                           name="phone"
                                           value={formData.phone}
                                           onChange={handleChange}
                                           placeholder="+1 (555) 000-0000"
                                           className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/10"
                                       />
       
                                   </div>
       
                               </div>
       
       
                               {/* Company + Location */}
                               <div className="grid grid-cols-2 gap-4 mb-4">
       
                                   <div>
       
                                       <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                           Company
                                       </label>
       
                                       <input
                                           type="text"
                                           name="company"
                                           value={formData.company}
                                           onChange={handleChange}
                                           placeholder="Acme Corp"
                                           className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/10"
                                       />
       
                                   </div>
       
       
                                   <div>
       
                                       <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                           Location
                                       </label>
       
                                       <input
                                           type="text"
                                           name="address"
                                           value={formData.address}
                                           onChange={handleChange}
                                           placeholder="New York, NY"
                                           className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/10"
                                       />
       
                                   </div>
       
                               </div>
       
       
                               {/* tag */}
                               <div className="mb-5">
       
                                   <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                       Tag
                                   </label>
       
                                   <div className="flex gap-3">
       
                                       {["Work", "Client", "Partner", "Friend"].map((tag) => (
       
                                           <button
                                               key={tag}
                                               type="button"
                                               onClick={() =>
                                                   setFormData((prev) => ({
                                                       ...prev,
                                                       tag: tag
                                                   }))
                                               }
                                               className={`px-4 py-2 rounded-xl border text-sm cursor-pointer transition duration-300 ${
                                                   formData.tag === tag
                                                       ? "bg-[#483AEA] text-white border-[#483AEA]"
                                                       : "border-gray-200 text-[#64748B] hover:bg-gray-50"
                                               }`}
                                           >
                                               {tag}
                                           </button>
       
                                       ))}
       
                                   </div>
       
                               </div>
       
       
                               {/* Buttons */}
                               <div className="grid grid-cols-2 gap-3">
       
                                   <button
                                       type="button"
                                       onClick={onClose}
                                       className="rounded-xl border border-gray-200 py-3 font-medium text-gray-800 hover:bg-gray-50 cursor-pointer transition duration-300"
                                   >
                                       Cancel
                                   </button>
       
                                   <button
                                       type="submit"
                                       className="rounded-xl bg-[#483AEA] py-3 font-semibold text-white hover:bg-[#392bc9] cursor-pointer transition duration-300"
                                   >
                                       Edit contact
                                   </button>
       
                               </div>
       
                           </div>
       
                       </form>
       
                   </div>
       
               </div>
    );
};