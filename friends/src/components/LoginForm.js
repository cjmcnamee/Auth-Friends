import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {

  // hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);

  // event handlers
  const handleUsername = e => {
    setUsername(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setUser([...user, {username: username, password: password}]);
    setUsername('');
    setPassword('');
  }

  // functions
  // const postToAPI = () => {
  //   axios.post('')
  // }

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' value={username} placeholder='Username' onChange={e => handleUsername(e)} />
        <input type='text' value={password} placeholder='Password' onChange={e => handlePassword(e)} />
        <button>Submit</button>
      </form>
      <button onClick={postToAPI}>Post</button>
    </>
  )
}

export default LoginForm;
