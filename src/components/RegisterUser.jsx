import React, { useState } from 'react';
import { Link } from "react-router-dom";
import RegistrationSuccess from "./RegistrationSuccess";
import axios from 'axios';


const RegisterUser = () => {
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const [gender, setGender] = useState('');
    const genders = ['Male', 'Female'];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const registerDTO = { firstName, lastName, emailAddress, phoneNumber, password };
        try {
            const responseData = await axios.post('http://localhost:8097/nexus-core/api/employee/register', registerDTO);
            setSuccessMessage('Registration successful! Welcome!');
            setIsRegistered(true);
            setResponse(responseData);
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className='wrapper'>
            {error && <p>{error}</p>}
            {isRegistered ? (
                <RegistrationSuccess message={successMessage} response={response} />
            ) :
                (<div>
                    <h3 className='title'>Mission Metrics</h3>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Email address" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Full name" required />
                        </div>
                        <div className="input-box">
                            <select
                                id="gender"
                                className="form-control custom-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                {genders.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
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
                )}
        </div>
    );

}

export default RegisterUser;