import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <Skeleton count={10} />
    }
    if (user) {
        return children;
    }
  return <Navigate to='/login' state={location?.pathname}></Navigate>
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}