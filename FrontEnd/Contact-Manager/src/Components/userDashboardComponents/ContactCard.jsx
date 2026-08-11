const ContactCard = ({ contact, onClick, selected }) => {

    return (
        <div
            onClick={onClick}
            className={`p-5 border-b border-gray-200 cursor-pointer ${
                selected
                    ? "bg-[#f4f2ff] border-l-4 border-l-[#483AEA]"
                    : "hover:bg-gray-50"
            }`}
        >

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-semibold">
                        {contact.name.charAt(0)}
                    </div>

                    <div>

                        <h3 className="font-medium text-lg">
                            {contact.name}
                        </h3>

                        <p className="text-gray-500">
                            {contact.company}
                        </p>

                    </div>

                </div>

                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {contact.category}
                </span>

            </div>

        </div>
    );
};

export default ContactCard;