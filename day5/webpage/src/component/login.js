import React from "react";
import { useState } from "react";
import "./loginpage.css";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "./icon";

const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();
    function handleClick() {
        navigate("/homepage");
    }
    return (
        <>
            <br />
            <div className="container">
                <div className="left child isactive">
                    <form style={{ padding: " 4vh 15%" }}>
                        <div style={{ position: "relative" }}>
                            <h1>Sign In</h1>
                            <Icon />
                        </div>
                        <br />
                        <label className="label">EMAIL</label>
                        <br />
                        <input
                            type="email"
                            id="Username"
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                            required
                            placeholder="Email"
                        />
                        <br />
                        <label for="Username" className="label">
                            PASSWORD
                        </label>
                        <br />
                        <input
                            type="password"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                            required
                            placeholder="Password"
                        />
                        <br />
                        <br />
                        <button className="navbutton mainbutton" disabled={email && password ? "" : "disabled"} onClick={() => handleClick()}>
                            Login
                        </button>
                        <br />
                        <input id="check" type="checkbox" name="check" />
                        <label className="colored" for="check">
                            Remember Me
                        </label>
                        <label id="fpassword">Forgot Password</label>
                    </form>
                </div>
                <div className="right child nonactive">
                    <div className="childitem">
                        <h1>WELCOME BACK!</h1>
                        <NavLink to="/signup" className="navi">
                            didn't have an account yet?
                            <br />
                            <br />
                            <button className="navbutton">SIGNUP</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
