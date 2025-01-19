import React, { useState } from 'react';
import { Link } from "react-router-dom";
import RegistrationSuccess from "./RegistrationSuccess";
import axios from 'axios';


const RegisterUser = () => {
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const [gender, setGender] = useState('');
    const genders = ['Male', 'Female'];
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleClear = () => {
        setFullName('');
        setEmailAddress('');
        setIsRegistered(false);
        setPassword('');
        setRepeatedPassword('');
        setGender('');
        setError('');
    };

    const handleRepeatedPasswordChange = (e) => {
        const repeatedPasswordValue = e.target.value;
        setRepeatedPassword(repeatedPasswordValue);
        setPasswordsMatch(repeatedPasswordValue === password || repeatedPasswordValue === '')
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const registerDTO = { fullName, emailAddress, password, gender };
        const uppercaseGender = gender.toUpperCase();
        const modifiedRegisterDTO = { ...registerDTO, gender: uppercaseGender };
        try {
            const responseData = await axios.post('http://localhost:8098/mission-metrics/user/auth/register', modifiedRegisterDTO);
            setSuccessMessage('Registration successful! Welcome!');
            setIsRegistered(true);
            setResponse(responseData);
        } catch (err) {
            setError('Registration failed. Please try again later.');
        }
    };

    return (
        <div className='outer-wrapper'>
            {error && <p className='error-message'>{error}</p>}
            <div className='wrapper'>
                {isRegistered ? (
                    <RegistrationSuccess message={successMessage} response={response} />
                ) :
                    (<div>
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
                                    type="text"
                                    className="form-control"
                                    placeholder="Full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
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
                            <div className="input-box">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repeat password"
                                    value={repeatedPassword}
                                    onChange={handleRepeatedPasswordChange}
                                    required
                                />
                            </div>
                            <br />
                            {!passwordsMatch && repeatedPassword !== '' && <p style={{ color: 'red' }}>Passwords do not match</p>}
                            <div className="input-box">
                                <select
                                    id="gender"
                                    className="form-control custom-select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                    style={{
                                        backgroundColor: '#002D62',
                                        color: 'white',
                                        borderRadius: 12
                                    }}
                                >
                                    <option value="">Select Gender</option>
                                    {genders.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="side-by-side-container">
                                <button type="submit" className="btn btn-primary" disabled={!passwordsMatch}>
                                    Register
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={handleClear}>
                                    Clear
                                </button>
                            </div>
                            <p>Not new? <Link to="/login">Login here</Link></p>
                        </form>
                    </div>
                    )}
            </div>
        </div>

    );

}

export default RegisterUser;