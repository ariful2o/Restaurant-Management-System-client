import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

export default function From() {
  const {user}=useContext(AuthContext)


  const handleAddItem = (e) => {
    e.preventDefault()

    const from = e.currentTarget
    const name = from.name.value
    const email = from.email.value
    const food_name = from.food_name.value
    const food_image = from.food_image.value
    const category = from.category.value
    const quantity = from.quantity.value
    const price = from.price.value
    const description = from.description.value
    const food_origin = from.food_origin.value
    const productDetails = { name, email, food_image, food_name, category, quantity, price, description, food_origin }

    axios.post('https://restaurant-management-server-lac.vercel.app/newfood', productDetails)
      .then(function (response) {
        if (response.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Food Item has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          from.reset()
        }
      })
      .catch(function (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500
        });
        console.log(error);
      });

  }

  return (
    <div className="w-full max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-10 md:my-20">
      <form onSubmit={handleAddItem}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="food_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
            <input name="food_name" type="text" id="food_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Food Name" required />
          </div>
          <div>
            <label htmlFor="food_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image</label>
            <input name="food_image" type="text" id="food_image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Food Image" required />
          </div>
          <div>
            <label htmlFor="food_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Category</label>
            <input name="category" type="text" id="food_category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required />
          </div>
          <div>
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
            <input name="quantity" type="text" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required />
          </div>
          <div>
            <label htmlFor="food_origin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Origin</label>
            <input name="food_origin" type="text" id="food_origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
          </div>
          <div>
            <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input name="price" type="number" id="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address (Read Only)</label>
          <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user?.email} disabled readOnly required />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name (Read Only)</label>
          <input name="name" type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user?.displayName} disabled readOnly required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea name="description" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ingredients, making procedure, etc."></textarea>

        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
      </form>

    </div>
  )
}