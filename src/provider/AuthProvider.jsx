import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import axios from "axios";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [photoURL, setPhotoURL] = useState("")
    const [addCart, setAddCart] = useState([])
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const addToCard = (id) => {
        const name = auth.currentUser?.displayName;
        const email = auth.currentUser.email;
        const date = Date.now();
        const addCradId = id
        const addCardDetails = { name, email, date, addCradId }

        axios.post('http://localhost:5000/addtocard', addCardDetails)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Food Add to Card Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const remaing=addCart.filter(card=>card.addCradId===id)
                    setAddCart([...addCart,remaing])
                }
            }).catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err)
            })
    }

    //--------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            setPhotoURL(currentUser?.photoURL)
            console.log('---------->>', currentUser);
        });
        return () => unSubscribe();
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:5000/addtocard/${auth.currentUser?.email}`)
            .then(res => {
                setAddCart(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [user,addCart])


    const authInfo = {
        user,
        setUser,
        loading,
        registerUser,
        loginUser,
        googleSignin,
        githubSignin,
        signout,
        photoURL,
        addToCard,
        addCart
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