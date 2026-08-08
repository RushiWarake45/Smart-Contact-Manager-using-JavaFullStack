import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <div className="signUp-container flex flex-col items-center justify-center">
                <Link to="/">
                    <div className="signUp-logo flex items-center gap-2 cursor-pointer pt-6" >
                        <img src="navbar1.png" alt="Logo" className="h-14 w-14" />
                        <h3 className="font-sans font-semibold text-xl">Personify</h3>
                    </div>
                </Link>
                <div className="signUp-text flex flex-col items-center gap-2 p-5 mb-4">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <h4 className="text-gray-600">Sign in to continue to your account.</h4>
                </div>

                <form className="signUp-form flex flex-col border border-gray-300 rounded-md p-8 gap-5 w-[400px] shadow-lg">
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="abc@example.com" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="minimum 8 characters" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <button type="submit" className="bg-[#000000] text-white py-2 px-4 rounded-md hover:bg-black-100">
                        Sign In
                    </button>
                    <p className="text-gray-600 text-sm text-center">
                       Don't have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Sign up</Link>
                    </p>
                </form>
            </div>
        </>
    );
}
export default Login;