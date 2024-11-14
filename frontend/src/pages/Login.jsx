import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigateTo = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/api/v1/user/login" , // patient login Url
                { email, password, confirmPassword, role: "Patient" }, 
                {
                    withCredentials: true, 
                    headers:{"Content-Type": "application/json"},
                }
            ); 
            toast.success(response.data.message); // when succesfully login it will nevigate
            setIsAuthenticated(true);
            navigateTo("/");

        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };
    if(isAuthenticated){
        return <Navigate to={"/"}/>;
    }

    return (  
    <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Login To Continue</p>
        <p>"CareStream empowers healthcare through seamless, efficient management, bridging patients and providers with innovation."</p>
        <form onSubmit={handleLogin}>
            <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email"
            />
            <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            />
            <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm Password" 
            />
            <div 
            style={{
                gap: "15px" , 
                justifyContent: "flex-end", 
                flexDirection: "row", 
                }}
                >
                    <p style={{ marginBottom: 0 }}>Not Registered?</p>
                    <Link 
                    to={"/register"} 
                    style={{ textDecoration: "none", alignItems: "center" }}
                    >
                        Register Here
                        </Link>

            </div>
            <div style={{justifyContent:"center" , alignItems:"center"}}>
                <button type="Submit">Login</button>

            </div>
            
        </form>
    </div>
  );
};
export default Login;