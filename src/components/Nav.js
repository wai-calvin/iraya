import React from "react";
//Router
import {Link} from "react-router-dom";

const Nav = () => {
    const navStyle = {
        color: "white"
    };

    return(
        <nav>
            <h3>
                <a href="../App" >
                    Iraya
                </a>
            </h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li> 
                </Link>
            </ul>

        </nav>
    );
};

export default Nav;