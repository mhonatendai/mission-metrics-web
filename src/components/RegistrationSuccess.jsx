import React from 'react';

const RegistrationSuccess = ({ message, response }) => {
    return (
        <div>
            <h2>Success!</h2>
            <p>{message}</p>
            <p>Go to <Link to="/login">Login Page</Link></p>
            <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
    );
};

export default RegistrationSuccess;