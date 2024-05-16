import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

export default function ProductCard({ foodItem }) {
    const {handleAddtoCart}=useContext(AuthContext)
    const { FoodName, FoodImage, Price, _id } = foodItem
    return (
        <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-4 h-64 rounded-lg w-full" src={FoodImage} alt={FoodName} />
            <div className="px-5 pb-5">
                <a >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{FoodName}</h5>
                </a>
                <StarRating />
                <div className="flex items-center justify-between">
                    <span className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">${Price}</span>
                    <div className="flex gap-2">
                        <button onClick={()=>handleAddtoCart(_id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                        <Link to={`/foods/${_id}`}>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
ProductCard.propTypes = {
    foodItem: PropTypes.object.isRequired
}