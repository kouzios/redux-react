import React from "react";
import {Link} from 'react-router-dom';

import "../styles/header.scss";

import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <div className='headerClass' >
            <Navbar sticky="top">
                <Link to="/">
                    <img alt="Company Logo" className="logo" src="logo512.png" />
                </Link>
                <Link to="/">
                    <div className="app-title">{process.env.REACT_APP_TITLE}</div>
                </Link> 
            </Navbar>
        </div>
    )
}

export default Header;
