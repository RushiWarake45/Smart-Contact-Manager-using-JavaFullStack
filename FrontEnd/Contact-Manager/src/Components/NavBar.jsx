
export const NavBar = () => {
    return (<>
        <nav clasName="navbar p-10">
            <ul className="flex items-center justify-between px-20 py-3">
                <div className="logo flex items-center gap-2" >
                 <img src="navbar1.png" alt="Logo" className="h-14 w-14"/>
                 <h3 className="font-sans font-semibold text-xl">Personify</h3>
                </div>

                <div className="navigations flex items-center gap-10 text-[#6B7280]">
                <li><a className="hover:text-black" href="/">Features</a></li>
                <li><a className="hover:text-black" href="/about">About</a></li>
                <li><a className="hover:text-black" href="/contact">Contact</a></li>
                </div>

                <div className="log-op flex items-center gap-5">
                  <button>Login</button>
                  <button className="bg-[#483AEA] text-white px-4 py-2 rounded">Get Started</button>
                </div>
                
            </ul>
        </nav>
        <hr className="border-[#E5E7EB] m-2"/>
        </>
    );
}
