import axios from "axios";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [allFoods, setAllFoods] = useState([])



    //store ids    
    const [addtoCartWithIds, setAddtoCartWithIds] = useState([])
    const [ordersWithIds, setOrdersWithIds] = useState([])


    //all my orders and addtocard
    const [myAddtoCartItems, setMyAddtoCartItems] = useState([])
    const [myOrdersItems, setMyOrdersItems] = useState([])

    //only db store ids find
    const addCradIds = addtoCartWithIds.map(item => item.addCradId);
    const ordersIds = ordersWithIds.map(item => item.orderId);

    //authentacation
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
    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Sign Out Success`,
                    showConfirmButton: false,
                    timer: 1500
                })
                setUser(null)
            }).catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.error(err)
            })
    }
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //add to cart food
    const handleAddtoCart = (id) => {
        const name = user?.displayName;
        const email = user?.email;
        const date = Date.now();
        const addCradId = id
        const addCardDetails = { name, email, date, addCradId }

        if (addtoCartWithIds.find(item => item.addCradId === addCradId)) {
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
                        setAddtoCartWithIds([...addtoCartWithIds, addCardDetails])
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
//close modal
const closeModal = () => {
    document.getElementById('my_modal_4').close()
}


    //--------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            const userEmail = currentUser?.email || user?.email
            const loginEmail = { email: userEmail };
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log('============>>', currentUser)

                axios.post('http://localhost:5000/jwt', loginEmail, { withCredentials: true })
                    .then((res) => {
                        console.log('jwt',res.data)
                    }).catch(err => console.error(err))

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
    const fetchData = async () => {
        try {
            // Fetch all foods
            const foodsResponse = await axios.get('http://localhost:5000/foods');
            setAllFoods(foodsResponse.data);
            // console.log('1', foodsResponse.data);

            // Fetch add to cart items
            const addToCartResponse = await axios.get(`http://localhost:5000/addtocard/${user?.email}`);
            setAddtoCartWithIds(addToCartResponse.data);
            // console.log('2', addToCartResponse.data)

            // Fetch orders
            const ordersResponse = await axios.get(`http://localhost:5000/order/${user?.email}`);
            setOrdersWithIds(ordersResponse.data);
            // console.log('3', ordersResponse.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    fetchData();
}, [user]);

    useEffect(()=>{
     //get fooditems===ids from db
        axios.post(`http://localhost:5000/myaddcart/${user?.email}`, addCradIds)
            .then(res => {
                if (res.data) {
                    setMyAddtoCartItems(res.data)
                }
            })
            .catch(err => console.error(err))

        axios.post(`http://localhost:5000/orders/${user?.email}`, ordersIds)
            .then(res => {
                if (res.data) {
                    // console.log(res.data)
                    setMyOrdersItems(res.data)
                }
            })
            .catch(err => console.error(err))
    },[addtoCartWithIds,ordersWithIds,])
// console.log(myAddtoCartItems, myOrdersItems)

    //send all information here
    const authInfo = {
        user, setUser, loading, registerUser, loginUser, logoutUser, googleSignin, githubSignin, allFoods, ordersWithIds, addtoCartWithIds,setAddtoCartWithIds, myAddtoCartItems, myOrdersItems, handleAddtoCart,closeModal
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