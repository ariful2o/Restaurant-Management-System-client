import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext } from "react";
import { RiDeleteBin2Line } from 'react-icons/ri';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../provider/AuthProvider";

export default function AddCaetTable({ food, closeModal, dd }) {
    const { addtoCartWithIds, ordersWithIds, setAddtoCartWithIds } = useContext(AuthContext)
    let date;
    const addcart = addtoCartWithIds?.find(item => item.addCradId === food._id)
    const orderDate = ordersWithIds?.find(item => item.orderId === food._id)

    dd ? date = new Date(addcart?.date) : date = new Date(orderDate?.date)
    //delete add to cart food
    const handleDeleteAddtoCart = (id) => {

        closeModal()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://restaurant-management-server-lac.vercel.app/deleteaddtocart/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            const remaing = addtoCartWithIds.filter(item => item.addCradId != id)

                            setAddtoCartWithIds(remaing)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            }, document.getElementById('my_modal_4').showModal());
                        }
                    }).catch(err => console.error(err))
            }
        });
        console.log('delete id', id)

    }

    return (
        <tr>
            <th>
                <label>
                    {dd && <button onClick={() => handleDeleteAddtoCart(food._id)}><RiDeleteBin2Line className='text-3xl' /></button>}
                </label>
            </th>
            <td className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-10 md:w-20 h-10 md:h-20">
                        <img src={food.FoodImage} alt={food.FoodName} />
                    </div>
                </div>
                <div>
                    <div className="font-normal md:font-bold">{food.FoodName}</div>
                    <div className="text-sm opacity-50">{food.FoodOrigin}</div>
                </div>
            </td>
            <td>
                {food.AddBy.Name}
                <br />
                <span className="badge badge-ghost badge-sm">{food.AddBy.Email}</span>
            </td>
            <td>${food.Price}</td>
            <td>{date.toString().replace(/GMT.*$/, '')}</td>
            <th>
                <Link to={`/foods/${food._id}`}>
                    <button onClick={closeModal} className="btn btn-ghost btn-xs">details</button>
                </Link>
            </th>
        </tr>

    )
}
AddCaetTable.propTypes = {
    food: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    dd: PropTypes.bool.isRequired,
}