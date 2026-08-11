import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiUsers,
    FiStar,
    FiEdit,
    FiMoreHorizontal
} from "react-icons/fi";

const ContactDetails = ({ contact }) => {

    if (!contact) {

        return (
            <div className="flex-1 flex items-center justify-center text-gray-400">

                <p>
                    Select a contact to view details
                </p>

            </div>
        );

    }

    return (

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
                        }

                    </div>


                    <div>

                        <h1 className="text-3xl font-semibold text-gray-900">
                            {contact.name}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            {contact.company}
                        </p>

                        <span className="inline-block mt-2 bg-[#EDE9FE] text-[#6D28D9] px-3 py-1 rounded-full text-sm">
                            {contact.category}
                        </span>

                    </div>

                </div>


                {/* Action buttons */}
                <div className="flex gap-3">

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50">

                        <FiStar />

                    </button>

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50">

                        <FiEdit />

                    </button>

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50">

                        <FiMoreHorizontal />

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
    );
};
export default ContactDetails;