import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
export const DashboardNavbar = ({ user }) => {

    const navigate = useNavigate();

const handleLogout = () => {
    toast(
        ({ closeToast }) => (
            <div>
                <p className="mb-3">Are you sure you want to logout?</p>

                <div className="flex gap-2">
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            closeToast();
                            navigate("/");
                            toast.success("Logged out successfully!");
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition duration-300"
                    >
                        Yes
                    </button>

                    <button
                        onClick={closeToast}
                        className="bg-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-400 transition duration-300"
                    >
                        No
                    </button>
                </div>
            </div>
        ),
        {
            autoClose: false,
            closeOnClick: false,
        }
    );
};

    return (
        <>
       <nav className="navbar p-2 border-b border-gray-300">
            <ul className="flex items-center justify-between px-4">
                <Link to="/">
                <div className="logo flex items-center gap-2 cursor-pointer" >
                 <img src="navbar1.png" alt="Logo" className="h-14 w-14"/>
                 <h3 className="font-sans font-semibold text-xl">Personify</h3>
                </div>
                </Link>

                <div className="flex items-center gap-7">
                  <Link to="/login"><button className="cursor-pointer flex items-center gap-1 font-sans"><CgProfile className="text-2xl text-[#483AEA]"/>{user? user.name:"Profile"}</button></Link>
                  <button className="bg-[#483AEA] text-white px-3 py-2 rounded text-lg cursor-pointer" onClick={handleLogout}>
                    <LuLogOut />
                  </button>
                </div>
                
            </ul>
        </nav>
    
        </>
        );
        }