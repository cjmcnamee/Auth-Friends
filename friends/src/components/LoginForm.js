import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const LoginForm = (props) => {

  // hooks
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // event handlers
  const handleChanges = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios.post('http://localhost:5000/api/login', user)
      .then(response => {
        console.log('user', user)
        console.log(response)
        setIsLoading(false);
        localStorage.setItem('token', response.data.payload);
        props.history.push('/friends');
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' name='username' placeholder='Username' onChange={e => handleChanges(e)} />
        <input type='text' name='password' placeholder='Password' onChange={e => handleChanges(e)} />
        <button>
          {isLoading ? (
            <Loader
             type="Bars"
             color="#00BFFF"
             height={10}
             width={100}
            /> ) : (
              'Get Friends Data'
            )}
        </button>
      </form>
    </>
  )
}

export default LoginForm;
