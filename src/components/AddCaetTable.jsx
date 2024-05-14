import PropTypes from 'prop-types';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function AddCaetTable({ food,closeModal }) {
    const { addCart } = useContext(AuthContext)
    const addcart = addCart.find(item => item.addCradId === food._id)
    const date = new Date(addcart.date)
    return (
        <tr>
            <th>
                <label>
                    <button>+</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={food.FoodImage} alt="Avatar Tailwind CSS Component" />
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
            <td>{date.toString()}</td>
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
    closeModal: PropTypes.func.isRequired
}