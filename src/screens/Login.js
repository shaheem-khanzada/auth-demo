import React from 'react';
import { useAuth } from '../context/AuthContext';

const Login = React.memo(() => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth();

  const submit = (e) => {
      e.preventDefault();
      login({ name, email, password, isLoggedIn: true });
  }

  return (
    <React.Fragment>
      <h1>LOGIN FORM</h1>
      <form onSubmit={submit}>
        <input
          required
          placeholder={'Name'}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          required
          placeholder={'Email'}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          required
          placeholder={'Password'}
          type={'password'}
          onChange={({ target }) => setPassword(target.value)}
        />
         <button>Submit</button>
      </form>
    </React.Fragment>
  )
});

export default Login;