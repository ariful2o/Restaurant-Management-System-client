import axios from "axios";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "../firebase/firebase.init";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [photoURL, setPhotoURL] = useState("")
    const [loading, setLoading] = useState(true)
    const [addCart, setAddCart] = useState([])
    const axiosSecure=useAxiosSecure()

    const [callAddCart, setCallAddCart] = useState(false)

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

        if (addCart.find(item => item.addCradId === addCradId)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Food is already added to card.",
                showConfirmButton: false,
                timer: 1500
            });
            return
        } else {
            axios.post('http://localhost:5000/addtocard', addCardDetails)
                .then(res => {
                    if (res.data.acknowledged) {
                        setCallAddCart(true)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Food Add to Card Successfull",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }).catch(err => {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: err.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(err)
                })
        }
    }

    //--------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            const userEmail = currentUser?.email || user?.email
            const loginEmail = { email: userEmail };
            if (currentUser) {
                setUser(currentUser);

                setPhotoURL(currentUser?.photoURL)
                setLoading(false);
                console.log('============>>', currentUser)
                axios.post('http://localhost:5000/jwt', loginEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    }).catch(err => {
                        console.log(err)
                    })

            } else {
                axios.post('http://localhost:5000/logout', loginEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => unSubscribe();
    }, [user]);
    const email = auth.currentUser?.email
    useEffect(() => {
        axiosSecure.get(`/addtocard/${email}`)
            .then(res => {
                setAddCart(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [callAddCart, email,axiosSecure])

    const authInfo = {
        user,
        setUser,
        loading,
        registerUser,
        loginUser,
        googleSignin,
        githubSignin,
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