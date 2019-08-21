import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsData = () => {

  const [friendsData, setFriendsData] = useState([]);
  const [friendName, setFriendName] = useState('');
  const [friendAge, setFriendAge] = useState('');
  const [friendEmail, setFriendEmail] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
        .then(response => {
          console.log(response);
          setFriendsData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }, [])

  // event handlers
  const handleName = e => {
    setFriendName(e.target.value);
  }
  const handleAge = e => {
    setFriendAge(e.target.value);
  }
  const handleEmail = e => {
    setFriendEmail(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth().post('http://localhost:5000/api/friends', {id: new Date(), name: friendName, age: friendAge, email: friendEmail})
      .then(response => {
        console.log(response);
        setFriendsData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      {friendsData.map(item => (
        <p key={item.id}>{item.name}--{item.age}--{item.email}</p>
      ))}
      <br />
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input type='text' name='name' placeholder='Name' onChange={e => handleName(e)} />
          <input type='text' name='age' placeholder='Age' onChange={e => handleAge(e)} />
          <input type='text' name='email' placeholder='Email' onChange={e => handleEmail(e)} />
          <button>Add Friend</button>
        </form>
      </div>
    </div>
  )
}

export default FriendsData;
