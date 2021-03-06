import React from 'react';
import "../index.css"
import Icon from '@mui/material/Icon';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationDisabledIcon from '@mui/icons-material/LocationDisabled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SignUp from './SignUp';

function Navbar(props) {
    return (
        <div className="navbar">
            <img src="" className="logo-img"/>
            {/* <a href="/" className="navbar-link">Home</a> */}
            {/* <a href="" className="navbar-link">Places</a> */}
            {/* <a href=""className="navbar-link">Influencers</a> */}
            <div className="navbar-center">
                <div className="navbar-button-1">
                <MyLocationIcon/>
            <span href="" className="navbar-button-text">Track my device</span>
            </div>
            <div className="navbar-center">
                <div className="navbar-button-2">
                <AddBoxIcon/>
            <span href="" className="navbar-button-text">Post</span>
            </div>
            <button href={SignUp}className="navbar-button-login">LogIn</button>
        </div>
        </div>
        </div>
    );
}

export default Navbar;