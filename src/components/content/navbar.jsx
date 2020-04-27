import React from "react";
import {Link} from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav className = 'nav'>
            <ul>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Dialogs">messages</Link></li>
                <li><Link to="">news</Link></li>
                <li><Link to="">Music</Link></li>
                <li><Link to="">Settings</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;