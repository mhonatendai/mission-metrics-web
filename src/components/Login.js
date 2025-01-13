import React from 'react';
import './LoginForm.css'

const Login = () => {
    return (
        <div className='wrapper'>
            <div className="title">
                <span>Mission Metrics</span>
            </div>
            <div>
                <form action="#">
                    <div className="row">
                        {/* <i className="fas fa-user"></i> */}
                        <input type="text" placeholder="Enter your email..." required />
                    </div>
                    <div className="row">
                        {/* <i className="fas fa-lock"></i> */}
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="pass"><a href="#">Forgot password?</a></div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="signup-link">New ? <a href="#">Register here</a></div>
                </form>
            </div>
        </div>
    )
}

export default Login