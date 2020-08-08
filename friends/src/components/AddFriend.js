import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function AddFriend (props){
    const [friendInfo, setFriendInfo] = useState({
        name: '',
        email: '',
        age: '',
        id: Date.now(),
    })
    const [error, setError] = useState('');

    const handleChanges = e => {
        setFriendInfo({
            ...friendInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', friendInfo)
            .catch(err => {
                setError(err.message);
            })
        setFriendInfo({
            name: '',
            email: '',
            age: '', 
        })
        setError('');
    }
    return (
        <form className='add-friend-form' onSubmit={handleSubmit}>
            <h1>Add Friend</h1>
            <input
            id='name' 
            type='text'
            name='name'
            value={friendInfo.name}
            onChange={handleChanges}
            placeholder='Name' />
            <br/>
            <input 
            id='age'
            type='text'
            name='age'
            value={friendInfo.age}
            onChange={handleChanges}
            placeholder='Age' />
            <br/>
            <input 
            id='email'
            type='email'
            name='email'
            value={friendInfo.email}
            onChange={handleChanges}
            placeholder='Email' />
            <br/>
            <button className='add-friend-btn'>Add Friend</button>
            {error.length > 0 ? <p className='error'>{error}</p> : ''}
        </form>
    )
}