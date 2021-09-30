import React from "react";
import {Link} from "react-router-dom";


const SideBar = ()=>{

    return(
        <div
            style={{
                padding: "10px",
                width: "15%",
                background: "#f0f0f0"
            }}
        >
            <ul style={{listStyleType: "none", padding: 0}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="user">Profile</Link>
                </li>
            </ul>
        </div>
    )

}

export default SideBar;