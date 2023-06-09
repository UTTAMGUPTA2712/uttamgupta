import React from "react";
import LoginSignup from "./component/loginpage";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <LoginSignup />
            </Router>
        </>
    );
};
export default App;
