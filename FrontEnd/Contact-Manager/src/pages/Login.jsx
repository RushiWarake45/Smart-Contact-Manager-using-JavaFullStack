import axios from "axios";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();

    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    });

    const handleChange=(e)=>{
         const {name,value}=e.target;
         setLoginData((prevData)=>({
             ...prevData,
            [name]:value
         })
           
        );
    }
    
    const handleSubmit= async(e)=>{
       e.preventDefault();
              if(!loginData.email.trim()){
                  toast.error("Email is required");
                  return;
              }
              if(loginData.password.length < 8){
                  toast.error("Password must be at least 8 characters long");
                  return;
              }
              if(!loginData.password){
                  toast.error("Password is required");
                  return;
              }
              if(!loginData.email.trim()){
                  toast.error("Email is required");
                  return;
              }
              if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)){
                  toast.error("Invalid email format");
                  return;
              }

              try{
                
                const response = await axios.post("http://localhost:8080/auth/login", loginData);
                toast.success("Login successful!");
                localStorage.setItem("token", response.data.token);
            
                 navigate("/user-dashboard");
              } catch (error) {
                toast.error("Invalid email or password");
              }

      
    }

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

                <form className="signUp-form flex flex-col rounded-md p-8 gap-5 w-[400px] shadow-[0_0_25px_rgba(0,0,0,0.20)] bg-white w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="abc@example.com" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} name="email" value={loginData.email}/>
                    </div>
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="minimum 8 characters" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} name="password" value={loginData.password} />
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