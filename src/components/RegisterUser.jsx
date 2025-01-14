import React from "react";
import { Link } from "react-router-dom";


const RegisterUser = () => {

    return (
        <div className='wrapper'>
            <div>
                <h3 className='title'>Mission Metrics</h3>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Email address" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Full name" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="input-box">
                        <button type="button" class="btn btn-primary">Register</button>
                    </div>
                    <p>Now new? <Link to="/login">Login here</Link></p>
                </form>
            </div>
        </div>
    )

}

export default RegisterUser;