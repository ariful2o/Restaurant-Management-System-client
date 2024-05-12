import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser)
            }
        })
        return ()=>unsubscribe()
    }, [])



    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}