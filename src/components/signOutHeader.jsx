import React, {Component} from 'react';
import '../styles/loginHeader.css'

export default function SignOutHeader (props) { 
    return (
        <React.Fragment>
            <div className="header">
            <div className="action">
                <button
                className="action-button"
                onClick={event =>  window.location.href='../pages/login.jsx'}
                >
                SIGN OUT
                </button>
            </div>
        </div>
        <img src="../images/logo.png" class="unilogo" />
        </React.Fragment>
        
    );
}