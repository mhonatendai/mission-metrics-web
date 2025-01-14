import React from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <div>
                <h3 className='title'>Mission Metrics</h3>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Username / Email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="input-box">
                        <button type="button" class="btn btn-primary">Login</button>
                    </div>
                    <div className="signup-link">New ? <a href="#">Register here</a></div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm