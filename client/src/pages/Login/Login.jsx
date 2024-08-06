import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../../utils/authUtils'; // Import login function

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, password);
            setSuccess('Login successful!');
            setEmail('');
            setPassword('');
            setError(null);

            navigate('/');
        } catch (error) {
            setError(error.message || 'Login failed');
            setSuccess(null);
        }
    };

    return (
        <div className="login_container">
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <img src="/icons/marvel_logo.png" alt="logo" />
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
                    <button type="submit">Sign In</button>
                    <span className="more">Don't have an account? <Link to="/signup" className="signup">Sign Up</Link></span>
                </form>
                <img src="/assets/login/avengers.png" alt="avengers" />
            </div>
        </div>
    );
};

export default Login;
