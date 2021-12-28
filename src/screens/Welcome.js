import React from 'react';
import { useAuth } from '../context/AuthContext';

const Welcome = React.memo(() => {
  const { user, logout } = useAuth();
    return (
      <div>
          <h1>Welcome {user.name}</h1>
          <button onClick={logout}>logout</button>
      </div>
    )
});

export default Welcome;
