import {Link} from "react-router-dom"
export const NavBar = () => {
    return (<>
        <nav className="navbar p-2">
            <ul className="flex items-center justify-between px-20 py-3">
                <Link to="/">
                <div className="logo flex items-center gap-2 cursor-pointer" >
                 <img src="navbar1.png" alt="Logo" className="h-14 w-14"/>
                 <h3 className="font-sans font-semibold text-xl">Personify</h3>
                </div>
                </Link>

                <div className="navigations flex items-center gap-10 text-[#6B7280]">
                <li><a className="hover:text-black" href="/">Features</a></li>
                <li><a className="hover:text-black" href="/about">About</a></li>
                <li><a className="hover:text-black" href="/contact">Contact</a></li>
                </div>

                <div className="log-op flex items-center gap-5">
                  <Link to="/login"><button className="cursor-pointer">Login</button></Link>
                  <Link to="/sign-up"><button className="bg-[#483AEA] text-white px-4 py-2 rounded" >Get Started</button></Link>
                </div>
                
            </ul>
        </nav>
        <hr className="border-[#E5E7EB] m-2"/>
        </>
    );
}
