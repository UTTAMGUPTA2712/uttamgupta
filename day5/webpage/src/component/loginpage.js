import React from "react";
import { Route, Routes } from "react-router-dom";
import "./loginpage.css";
import Login from "./login";
import Signup from "./signup";
import HomePage from "./homepage";
// import na
const LoginSignup = () => {
    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>
        </>
    );
};
export default LoginSignup;
