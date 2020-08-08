import React from 'react';

export default function DisplayFriend (props){
    return (
        <div className='friend-data-container'>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.age}</h2>
            <p>{props.friend.email}</p>
        </div>
    )
}