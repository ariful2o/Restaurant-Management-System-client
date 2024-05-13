import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'

export default function ProductCard({ foodItem }) {
    const { FoodName, FoodImage, FoodCategory, Quantity, Price, AddBy, FoodOrigin, Description, _id } = foodItem
    return (
        <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/foods/${_id}`}>
                <img className="p-4 h-64 rounded-lg w-full" src={FoodImage} alt={FoodName} />
            </Link>
            <div className="px-5 pb-5">
                <a >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{FoodName}</h5>
                </a>
                <StarRating />
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${Price}</span>
                    <div className="flex gap-2">
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
                    </div>
                </div>
            </div>

        </div>

    )
}
ProductCard.propTypes = {
    foodItem: PropTypes.object.isRequired
}