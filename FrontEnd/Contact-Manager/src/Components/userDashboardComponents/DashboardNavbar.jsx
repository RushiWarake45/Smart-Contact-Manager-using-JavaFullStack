import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
export const DashboardNavbar = ({ user }) => {
    return (
        <>
       <nav className="navbar p-2">
            <ul className="flex items-center justify-between px-4">
                <Link to="/">
                <div className="logo flex items-center gap-2 cursor-pointer" >
                 <img src="navbar1.png" alt="Logo" className="h-14 w-14"/>
                 <h3 className="font-sans font-semibold text-xl">Personify</h3>
                </div>
                </Link>

                <div className="flex items-center gap-7">
                  <Link to="/login"><button className="cursor-pointer flex items-center gap-1 font-sans"><CgProfile className="text-2xl text-[#483AEA]"/>{user? user.name:"Profile"}</button></Link>
                  <Link to="/sign-up"><button className="bg-[#483AEA] text-white px-3 py-2 rounded text-lg" ><LuLogOut /></button></Link>
                </div>
                
            </ul>
        </nav>
    
        </>
        );
        }