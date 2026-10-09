import React, { useState } from "react";
const Sidebar = ({ allCount, favoriteCount, clientsCount, partnersCount, friendsCount, workCount, setCurrFilter, currFilter }) => {

    // const [selected, setSelected] = useState("All");

    return (
        <div className="w-[280px] border-r border-gray-200 flex flex-col">

            <div className="p-6">

                <p className="text-gray-500 font-medium mb-4">
                    FILTER
                </p>

                <div className="flex flex-col gap-2">

                    <button onClick={() => setCurrFilter("All")} className={`flex justify-between px-4 py-3 rounded-xl cursor-pointer ${currFilter === "All" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>All</span>
                        <span>{allCount}</span>
                    </button>

                    <button onClick={() => setCurrFilter("Work")} className={`flex justify-between px-4 py-3 rounded-xl cursor-pointer ${currFilter === "Work" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Work</span>
                        <span>{workCount}</span>
                    </button>

                    <button onClick={() => setCurrFilter("Client")} className={`flex justify-between px-4 py-3 rounded-xl cursor-pointer ${currFilter === "Client" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Client</span>
                        <span>{clientsCount}</span>
                    </button>

                    <button onClick={() => setCurrFilter("Partner")} className={`flex justify-between px-4 py-3 rounded-xl cursor-pointer ${currFilter === "Partner" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Partner</span>
                        <span>{partnersCount}</span>
                    </button>

                    <button onClick={() => setCurrFilter("Friend")} className={`flex justify-between px-4 py-3 rounded-xl cursor-pointer ${currFilter === "Friend" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Friend</span>
                        <span>{friendsCount}</span>
                    </button>

                    <button onClick={() => setCurrFilter("Favorite")} className={`flex justify-between px-4 py-3 rounded-xl cursor-pointer ${currFilter === "Favorite" ? "bg-[#483AEA] text-white" : "hover:bg-gray-100"}`} >
                        <span>Favorite</span>
                        <span>{favoriteCount}</span>
                    </button>

                </div>

            </div>

            <div className="mt-auto border-t border-gray-200 p-6">
                <p>
                    <span className="font-medium">{allCount}</span> total contacts
                </p>
            </div>

        </div>
    );
};

export default Sidebar;