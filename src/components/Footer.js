import React from "react";
import footerStyle from "../assets/css/footerStyle.css"
import logo from "../assets/pokemon_logo.png";
import githubLogo from "../assets/github-logo.png";


function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="logo" width="100px" height="40px" />
            </div>

            <div className="logo-container">
                <div className="github-logo">
                    <a href="https://github.com/Juggernaut9/pokemon">
                        <img src={githubLogo} alt="logo" width="35px" height="35px" />
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Footer;
