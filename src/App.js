import React from 'react';
import NavigationContainer from './route';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = React.memo(() => {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <NavigationContainer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
});

export default App;
