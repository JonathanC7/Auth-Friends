import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login (props){
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        isLoading: false,
        error: ''
    })

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                localStorage.setItem('authToken', res.data.payload)
                props.history.push('/friends')
            })
            .catch(err => {
                setCredentials({
                    ...credentials,
                    error: err.message
                })
                localStorage.removeItem('authToken')
            })
        setCredentials({
            username: '',
            password: '',
            isLoading: false,
            error: ''
        })
    }
    return (
        <div>
            <form onSubmit={login}>
                <input 
                type='text'
                name='username'
                value={credentials.username}
                onChange={handleChanges} />
                <input
                type='password'
                name='password'
                value={credentials.password}
                onChange={handleChanges} />
                <button>Log In</button>
            </form>
        </div>
    )
}