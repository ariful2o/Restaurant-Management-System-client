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
    const [loading, setLoading] = useState(true)
    const [photoURL, setPhotoURL] = useState("")
    const [addCart, setAddCart] = useState([])
    const axiosSecure = useAxiosSecure()
    const [callUseEffect, setCallUseEffect] = useState(false)
    const [orders,setOrders]=useState([])

    //all my orders and addtocard
    const [myAddCrat, setMyAddCard] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [myorders,setMyorders]=useState([])

    const addCradIds = addCart.map(item => item.addCradId);
    const ordersIds = orders.map(item => item.orderId);

    const email = auth.currentUser?.email
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
                        setCallUseEffect(true)
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

    //find addTo card and Orders

    

    const showaddcard = () => {
        setModalShow(true)
        axiosSecure.post(`/myaddcart/${email}`, addCradIds)
            .then(res => {
                if (res.data) {
                    setMyAddCard(res.data)
                    document.getElementById('my_modal_4').showModal()
                }
            })
            .catch(err => console.log(err))
    }
    const showOrders = () => {
        axiosSecure.post(`/orders/${email}`, ordersIds)
            .then(res => {
                if (res.data) {
                    setMyorders(res.data)
                    document.getElementById('my_modal_4').showModal()
                }
            })
            .catch(err => console.log(err))
            setModalShow(false)
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
                    .then((res) => {
                        console.log(res.data)
                    }).catch(err => {
                        console.error(err)
                    })

            } else {
                axios.post('http://localhost:5000/logout', loginEmail, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data)
                    }).catch(err => {
                        console.error(err)
                    })
            }
        });
        return () => unSubscribe();
    }, [user]);
    useEffect(() => {
        axiosSecure.get(`/addtocard/${email}`)
            .then(res => {
                setAddCart(res.data)
            }).catch(err => {
                console.log(err)
            })
        axiosSecure.get(`/order/${email}`)
            .then(res => {
                setOrders(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [callUseEffect, email, axiosSecure])

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
        addCart,
        orders,
        setCallUseEffect,

        showaddcard,showOrders,myAddCrat,myorders,modalShow
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