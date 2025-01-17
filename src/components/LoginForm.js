import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LoginForm = () => {
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginDTO = { emailAddress, password };
        try {
            const responseData = await axios.post('http://localhost:8098/mission-metrics/user/login', loginDTO);
        } catch (err) {
            setError('Login failed. Please try again later.');
        }
    };

    const handleClear = () => {
        setEmailAddress('');
        setPassword('');
        setError('');
    };

    return (
        <div className='outer-wrapper'>
            {error && <p className='error-message'>{error}</p>}
            <div className='wrapper'>
                <div>
                    <h3 className='title'>Mission Metrics</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="side-by-side-container">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={handleClear}>
                                    Clear
                                </button>
                            </div>
                        <p>New? <Link to="/register">Register here</Link></p>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginForm