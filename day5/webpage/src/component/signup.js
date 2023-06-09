import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./loginpage.css";
import Icon from "./icon";
const Signup = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password1, setpassword1] = useState();
    const [password2, setpassword2] = useState();
    const navigate = useNavigate();
    function handleClick() {
        if (password1 !== password2) {
            alert("Passwords do not match");
            return;
        }
        if (password1.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }
        alert("Successfully Signed up");
        navigate("/login");
    }
    return (
        <>
            <br />
            <div className="container">
                <div className="right child isactive">
                    <form id="form">
                        <div style={{ position: "relative" }}>
                            <h1>SignUp</h1>
                            <Icon />
                        </div>
                        <label className="label">ENTER YOUR FULL NAME</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                            required
                            placeholder="Full Name"
                        />
                        <br />
                        <label className="label">ENTER YOUR EMAIL</label>
                        <br />
                        <input
                            type="email"
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                            required
                            placeholder="Email"
                        />
                        <br />
                        <label className="label">ENTER YOUR PASSWORD</label>
                        <br />
                        <input
                            type="password"
                            onChange={(e) => {
                                setpassword1(e.target.value);
                            }}
                            required
                            placeholder="Password"
                        />
                        <br />
                        <label className="label">CONFIRM PASSWORD</label>
                        <br />
                        <input
                            type="password"
                            onChange={(e) => {
                                setpassword2(e.target.value);
                            }}
                            required
                            placeholder="Password"
                        />
                        <br />
                        <button className="navbutton mainbutton" disabled={name && email && password1 && password2 ? "" : "disabled"} onClick={() => handleClick()}>
                            SignUp
                        </button>
                    </form>
                </div>
                <div className="left child nonactive">
                    <div className="childitem">
                        <h1>Lets Get To Know You</h1>
                        <NavLink to="/login" className="navi">
                            Have an account already
                            <br />
                            <br />
                            <button className="navbutton">LOGIN</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;
