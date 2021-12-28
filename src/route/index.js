import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAuth } from '../context/AuthContext';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import ProtectedRoute from './ProtectedRoute';

const NavigationContainer = React.memo(() => {
    const { loading } = useAuth();

    if (loading) {
        return <Loading />
    }

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/welcome' element={
                <ProtectedRoute>
                    <Welcome />
                </ProtectedRoute>
            } />
        </Routes>
    )
});

export default NavigationContainer;