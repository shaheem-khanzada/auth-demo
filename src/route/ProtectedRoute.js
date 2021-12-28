import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = React.memo(({ children }) => {
    const location = useLocation();
    const { user } = useAuth();

    if (user?.isLoggedIn) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} />
    );
});

ProtectedRoute.propTypes = {
	children: PropTypes.element
};

export default ProtectedRoute;