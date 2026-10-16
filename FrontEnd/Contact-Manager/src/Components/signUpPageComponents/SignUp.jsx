
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.password) {
      toast.error("Password is required");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/users",
        formData
      );

      toast.success("Sign up successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      localStorage.setItem("token", response.data.token);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred during sign up. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#483AEA] focus:bg-white focus:ring-4 focus:ring-[#483AEA]/10";

  return (
    <div className="min-h-screen bg-[#F7F8FC] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">

        {/* Main Signup Card */}
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_70px_rgba(31,41,55,0.09)] lg:grid-cols-2">

          {/* Left Decorative Panel */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#483AEA] via-[#5748ED] to-[#3325B9] p-10 text-white lg:flex xl:p-14">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/5" />

            {/* Brand */}
            <Link
              to="/"
              className="relative z-10 inline-flex w-fit items-center gap-3"
            >
              <img
                src="/navbar1.png"
                alt="Personify Logo"
                className="h-12 w-12 rounded-xl bg-white p-1 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">
                Personify<span className="text-purple-200">.</span>
              </span>
            </Link>

            {/* Hero Content */}
            <div className="relative z-10 my-12">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-purple-50">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                YOUR JOURNEY STARTS HERE
              </span>

              <h1 className="max-w-md text-4xl font-bold leading-tight xl:text-5xl">
                A better way to manage your{" "}
                <span className="text-purple-200">digital life.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-purple-100">
                Create your Personify account and get started with a simpler,
                more personalized experience.
              </p>

              {/* Feature Highlights */}
              <div className="mt-9 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    ✓
                  </span>
                  <span className="text-sm text-white/90">
                    Simple and easy account setup
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    ✓
                  </span>
                  <span className="text-sm text-white/90">
                    Your personalized experience starts here
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    ✓
                  </span>
                  <span className="text-sm text-white/90">
                    Get started in just a few steps
                  </span>
                </div>
              </div>
            </div>

            <p className="relative z-10 text-xs text-purple-200">
              © {new Date().getFullYear()} Personify. All rights reserved.
            </p>
          </div>

          {/* Right Signup Form */}
          <div className="flex flex-col justify-center px-5 py-9 sm:px-10 sm:py-12 lg:px-10 xl:px-14">

            {/* Mobile Brand */}
            <Link
              to="/"
              className="mb-8 flex w-fit items-center gap-2 lg:hidden"
            >
              <img
                src="/navbar1.png"
                alt="Personify Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Personify<span className="text-[#483AEA]">.</span>
              </span>
            </Link>

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center rounded-lg bg-[#483AEA]/10 px-3 py-1.5 text-xs font-semibold text-[#483AEA]">
                CREATE YOUR ACCOUNT
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get started today
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                Join Personify and create your account in seconds.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full name
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  </svg>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    className={`${inputClass} pl-11 pr-16`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-1 py-1 text-xs font-semibold text-[#483AEA] hover:text-[#3325B9] focus:outline-none focus:ring-2 focus:ring-[#483AEA]/30"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Use at least 8 characters for your password.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#483AEA] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#483AEA]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a2db8] hover:shadow-xl hover:shadow-[#483AEA]/25 focus:outline-none focus:ring-4 focus:ring-[#483AEA]/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#483AEA] transition-colors hover:text-[#3325B9] hover:underline"
              >
                Log in
              </Link>
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              Your account details are handled securely.
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </div>
  );
};

export default SignUp;
