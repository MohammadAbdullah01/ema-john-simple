import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shimpment = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    // const [user, setUser] = useState({})

    const handleName = event => {
        setName(event.target.value)
    }
    const handleAddress = event => {
        setAddress(event.target.value)
    }
    const handleNumber = event => {
        setNumber(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        const shipment = [name, user?.email, number, address]
        console.log(shipment)

    }
    const [user] = useAuthState(auth)

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         setUser(user)
    //     })
    // }, [])
    console.log(user)

    return (
        <div className='form-container'>
            <h2 className="form-title">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleName} type="text" name="name" id="name" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddress} type="text" name="address" id="address" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handleNumber} type="number" name="phone" id="phone" required />
                </div>
                <input className='submit-btn' type="submit" value="Add Shippint" />
            </form>
        </div>
    );
};

export default Shimpment;