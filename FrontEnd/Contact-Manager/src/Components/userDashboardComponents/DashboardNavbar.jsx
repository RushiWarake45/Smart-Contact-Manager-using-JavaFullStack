
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

export const DashboardNavbar = ({ user }) => {
  const navigate = useNavigate();
  const [showProfileName, setShowProfileName] = useState(false);

  const handleLogout = () => {
    toast(
      ({ closeToast }) => (
        <div className="p-1">
          <p className="mb-4 text-sm font-semibold text-gray-800">
            Are you sure you want to logout?
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                closeToast();
                navigate("/");
                toast.success("Logged out successfully!");
              }}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Yes, Logout
            </button>

            <button
              onClick={closeToast}
              className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false }
    );
  };

  return (
    <nav className="sticky top-0 z-50 shrink-0 border-b border-gray-200/80 bg-white/95 px-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[64px] max-w-[1600px] items-center justify-between sm:h-[72px]">

        {/* Brand */}
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 transition duration-300 group-hover:bg-violet-100 sm:h-11 sm:w-11 sm:rounded-2xl">
            <img
              src="/navbar1.png"
              alt="Personify"
              className="h-7 w-7 object-contain sm:h-9 sm:w-9"
            />
          </div>

          <span className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Personify<span className="text-[#483AEA]">.</span>
          </span>
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              aria-label="Show profile name"
              aria-expanded={showProfileName}
              onClick={() =>
                setShowProfileName((previous) => !previous)
              }
              onMouseEnter={() => setShowProfileName(true)}
              onMouseLeave={() => setShowProfileName(false)}
              onFocus={() => setShowProfileName(true)}
              onBlur={() => setShowProfileName(false)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-[#483AEA] focus:outline-none focus:ring-4 focus:ring-violet-100 sm:h-11 sm:w-11 sm:rounded-2xl"
            >
              <CgProfile className="h-[21px] w-[21px] sm:h-6 sm:w-6" />
            </button>

            {showProfileName && (
              <div className="absolute right-0 top-full z-[60] mt-3 w-56 max-w-[calc(100vw-24px)] rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-900/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-[#483AEA]">
                    <CgProfile size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                      Signed in as
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-gray-800">
                      {user?.name || "Profile"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-gray-200 sm:block" />

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            aria-label="Logout"
            title="Logout"
            className="group flex h-9 items-center justify-center gap-2 rounded-xl bg-[#483AEA] px-2.5 text-white shadow-sm shadow-[#483AEA]/20 transition duration-200 hover:bg-[#3a2db8] hover:shadow-md hover:shadow-[#483AEA]/25 focus:outline-none focus:ring-4 focus:ring-violet-100 sm:h-11 sm:rounded-2xl sm:px-4"
          >
            <LuLogOut className="h-[18px] w-[18px] transition-transform duration-200 group-hover:-translate-x-0.5 sm:h-5 sm:w-5" />

            <span className="hidden text-sm font-semibold sm:inline">
              Logout
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
