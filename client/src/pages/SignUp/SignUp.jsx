import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../../../utils/authUtils'; // Import registration function

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await register(username, email, password);
            setSuccess('Registration successful! Please log in.');
            setUsername('');
            setEmail('');
            setPassword('');
            setError(null);

            navigate('/login');
        } catch (error) {
            setError(error.message || 'Registration failed');
            setSuccess(null);
        }
    };

    return (
        <div className="signup_container">
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <img src="/icons/marvel_logo.png" alt="logo" />
                    <div className="input-container username">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-container email">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-container password">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit">Register</button>
                    <span className="more">
                        Already have an account? <Link to="/login" className="login">Login</Link>
                    </span>
                </form>
                <img src="/assets/login/avengers.png" alt="avengers" />
            </div>
        </div>
    );
};

export default SignUp;
