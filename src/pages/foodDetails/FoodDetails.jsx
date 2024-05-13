import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import BannerCommon from "../../components/BannerCommon";
import ProductCard from "../../components/ProductCard";
import StarRating from "../../components/StarRating";
import auth from "../../firebase/firebase.init";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


export default function FoodDetails() {
    const { addToCard } = useContext(AuthContext)
    const [count, setCount] = useState(1)
    const [topRatedFood, setTopRatedFood] = useState([])
    const food = useLoaderData();
    const { FoodName, FoodImage, FoodCategory, Quantity, Price, AddBy, FoodOrigin, Description, _id } = food

    const countPlus = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const countMynass = useCallback(() => {
        if (count > 1) {
            setCount(count - 1)
        }
    }, [count])

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setTopRatedFood(res.data))
    }, [])
    const randomIndex = Math.floor(Math.random() * topRatedFood.length)
    const sliceFood = topRatedFood.slice(randomIndex, topRatedFood.length)

    const user = auth.currentUser;

    const handlePurchase = () => {
        const contatie = count
        const name = user?.displayName;
        const email = user.email;
        const date = Date.now();
        const orderId = _id
        const orderDetails = { contatie, name, email, date, orderId }

        axios.post('http://localhost:5000/order', orderDetails)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Order Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(res.data)
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

    return (
        <><BannerCommon location="Food Details"></BannerCommon><div className="w-full lg:w-11/12 mx-auto">
            <div className="flex flex-col bg-base-200 text-black border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-200 gap-2 lg:gap-20">

                <div className="w-full lg:w-1/2">
                    <img className="object-cover w-full rounded-lg lg:m-8" src={FoodImage} alt="" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col  p-4 text-black">
                    <h5 className="my-6 text-4xl font-bold tracking-tight text-gray-900 ">{FoodName}</h5>
                    <div className="flex items-center gap-8">
                        <StarRating />
                        <span className="text-[#C4C4C4] mb-2">(0 customer review)</span>
                    </div>
                    <h4 className="text-2xl font-cormorant font-bold">${Price}</h4>
                    <div className="divider"></div>
                    <p className="mb-3 font-normal text-gray-700 font-josefin">{Description}</p>
                    <div className="flex gap-4 lg:gap-20 h-16 my-10">
                        <div className="border-2 w-28 border-[#E1B168] lg:px-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-5xl">{count}</h3>
                                <div className="join join-vertical">
                                    <button onClick={countPlus} className=" join-item"><IoIosArrowUp className="text-3xl" /></button>
                                    <button onClick={countMynass} className=" join-item"><IoIosArrowDown className="text-3xl" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="gap-4 flex">
                            <button onClick={() => addToCard(_id)} className="border-2 border-[#E1B168] w-28">Add to Card</button>
                            <button onClick={handlePurchase} className="bg-[#E1B168] w-24">Purchase</button>
                        </div>
                    </div>
                    <div className="mt-8 space-y-4">
                        <p className="text-[#E1B168] text-xl">CATEGORY :<span className="text-gray-700"> {FoodCategory}</span></p>
                        <p className="text-[#E1B168] text-xl">Food Origin :<span className="text-gray-700"> {FoodOrigin}</span></p>
                        <p className="text-[#E1B168] text-xl">Add By :<span className="text-gray-700"> {AddBy.Name}</span></p>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Description" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{Description}</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Reviews (0)" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Now Reviews</div>
                </div>
            </div>
            <div className="bg-base-300 my-20">
                <h2 className="text-4xl font-cormorant font-semibold my-4 lg:my-20 p-8">Related Dishes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {
                        sliceFood.map(food => <ProductCard foodItem={food} key={food._id}></ProductCard>)
                    }
                </div>
            </div>
        </div></>
    )
}
