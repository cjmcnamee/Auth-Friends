import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm';

const AppRouter = () => {
  return (
    <div>
      <Route exact path='/' component='' />
      <Route path='/login' component={LoginForm} />
    </div>
  )
}

export default AppRouter;
