import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
  return <Navigate to='/login' state={location?.pathname}></Navigate>
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}