import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Loading = React.memo(() => {
    return (
        <img
            src={logo}
            className="App-logo"
            alt="logo"
        />
    )
});

export default Loading;
