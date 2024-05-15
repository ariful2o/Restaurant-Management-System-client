import PropTypes from 'prop-types';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { RiDeleteBin2Line } from 'react-icons/ri';

export default function AddCaetTable({ food, closeModal, dd }) {
    const { addCart, orders } = useContext(AuthContext)
    let date;
    const addcart = addCart?.find(item => item.addCradId === food._id)
    const orderDate = orders?.find(item => item.orderId === food._id)

    dd ? date = new Date(addcart.date) : date = new Date(orderDate.date)


    return (
        <tr>
            <th>
                <label>
                    <button><RiDeleteBin2Line className='text-3xl' /></button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={food.FoodImage} alt={food.FoodName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{food.FoodName}</div>
                        <div className="text-sm opacity-50">{food.FoodOrigin}</div>
                    </div>
                </div>
            </td>
            <td>
                {food.AddBy.Name}
                <br />
                <span className="badge badge-ghost badge-sm">{food.AddBy.Email}</span>
            </td>
            <td>{food.Price}</td>
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