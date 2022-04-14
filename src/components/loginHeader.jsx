import React, {Component} from 'react';
import '../styles/loginHeader.css'

export default function LoginHeader (props) {
    return (
        <div className="header">
            <div className="action">
                <button
                className="action-button"
                onClick={event =>  window.location.href='../pages/login.jsx'}
                >
                LOGIN
                </button>
            </div>
        </div>
    );
}
