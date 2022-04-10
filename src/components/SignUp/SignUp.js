import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    if (user) {
        console.log(user)
        navigate('/shop')
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("your two passwords didn't match")
            return;
        }
        // if (hookError) {
        //     setHookErrorMsg(hookError.message)
        // }
        setError("");
        createUserWithEmailAndPassword(email, password)

    }


    return (
        <div className='form-container'>
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required />
                </div>
                <p style={{ color: "Red" }}>{error}</p>

                <input className='submit-btn' type="submit" value="Sign Up" />
                <p>Already hava an account? <Link className='signup-link' to='/login'>Log in</Link></p>
            </form>
        </div>
    );
};

export default SignUp;