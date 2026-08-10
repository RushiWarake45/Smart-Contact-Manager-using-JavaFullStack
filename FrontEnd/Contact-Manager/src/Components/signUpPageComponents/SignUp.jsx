import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData((prevData) => ({
           ...prevData,
           [name]: value,
       }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.name.trim()){
            toast.error("Name is required");
            return;
        }
        if(!formData.email.trim()){
            toast.error("Email is required");
            return;
        }
        if(formData.password.length < 8){
            toast.error("Password must be at least 8 characters long");
            return;
        }
        if(!formData.password){
            toast.error("Password is required");
            return;
        }
        if(!formData.email.trim()){
            toast.error("Email is required");
            return;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            toast.error("Invalid email format");
            return;
        }

        try{
            const response = await axios.post("http://localhost:8080/users", formData);
            toast.success("Sign up successful!");
            setFormData({
            name: "",
            email: "",
            password: ""
        });
         localStorage.setItem("token", response.data.token);
        navigate("/login");

        }
        catch(error){
            toast.error("An error occurred during sign up. Please try again.");
            return;
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
                    <h1 className="text-3xl font-bold">Create Your Account</h1>
                    <h4 className="text-gray-600">Free forever. No credit card required.</h4>
                </div>

                <form className="signUp-form flex flex-col rounded-md p-8 gap-5 w-[400px] shadow-[0_0_25px_rgba(0,0,0,0.20)] bg-white w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="abc xyz" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} name="name" value={formData.name} />
                    </div>
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="abc@example.com" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} name="email" value={formData.email} />
                    </div>
                    <div className="inputField flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="minimum 8 characters" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} name="password" value={formData.password} />
                    </div>
                    
                    <button type="submit " className="bg-[#483AEA] text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Create Account
                    </button>
                    <p className="text-gray-600 text-sm text-center">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
                    </p>
                </form>
                
            </div>
            <ToastContainer position="top-right" autoClose={3000} theme="light"/>
        </>
    );
}

export default SignUp;