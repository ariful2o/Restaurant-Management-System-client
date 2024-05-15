import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

function OrderDetailsCard({ myorders }) {
    const { FoodName, FoodCategory, Price, FoodOrigin, FoodImage } = myorders
    const { ordersIds } = useContext(AuthContext)
    console.log(myorders)
    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        myorders.map(item => {
                            const order = ordersIds.find(item => item.orderId === item._id)

                            return (
                                <li key={item._id} className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src={FoodImage} alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {FoodName}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {FoodOrigin}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {order?.contatie}
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            ${Price}
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default OrderDetailsCard;
OrderDetailsCard.propTypes = {
    myorders: PropTypes.object.isRequired
}