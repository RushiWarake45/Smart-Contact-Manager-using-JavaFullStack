import React, { useState } from "react";
const Sidebar = () => {

    const [selected, setSelected] = useState("All");

    return (
        <div className="w-[280px] border-r border-gray-200 flex flex-col">

            <div className="p-6">

                <p className="text-gray-500 font-medium mb-4">
                    FILTER
                </p>

                <div className="flex flex-col gap-2">

                    <button onClick={() => setSelected("All")} className={`flex justify-between px-4 py-3 rounded-xl ${selected === "All" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>All</span>
                        <span>8</span>
                    </button>

                    <button onClick={() => setSelected("Work")} className={`flex justify-between px-4 py-3 rounded-xl ${selected === "Work" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Work</span>
                        <span>3</span>
                    </button>

                    <button onClick={() => setSelected("Client")} className={`flex justify-between px-4 py-3 rounded-xl ${selected === "Client" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Client</span>
                        <span>2</span>
                    </button>

                    <button onClick={() => setSelected("Partner")} className={`flex justify-between px-4 py-3 rounded-xl ${selected === "Partner" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Partner</span>
                        <span>2</span>
                    </button>

                    <button onClick={() => setSelected("Friend")} className={`flex justify-between px-4 py-3 rounded-xl ${selected === "Friend" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Friend</span>
                        <span>1</span>
                    </button>

                </div>

            </div>

            <div className="mt-auto border-t border-gray-200 p-6">
                <p>
                    <span className="font-medium">8</span> total contacts
                </p>
            </div>

        </div>
    );
};

export default Sidebar;