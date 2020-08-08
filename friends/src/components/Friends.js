import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import DisplayFriend from './DisplayFriend';
import AddFriend from './AddFriend';

export default function Friends (props){
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [friends])

    return(
        <div>
            <AddFriend />
            {friends.map(friend => {
                return <DisplayFriend friend={friend} key={friend.id}/>
            })}
        </div>
    )
}