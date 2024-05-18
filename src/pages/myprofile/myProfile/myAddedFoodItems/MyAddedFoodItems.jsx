import { useContext, useEffect, useState } from "react";
import BannerCommon from "../../../../components/BannerCommon";
import HelmetTitle from "../../../../components/HelmetTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";

export default function MyAddedFoodItems() {
  const { user } = useContext(AuthContext);
  const [myaddedfoods, setMyaddedfoods] = useState([]);
  const email = user?.email;
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const url = `/myaddfoods/${email}`;

    axiosSecure.get(url)
      .then(res => {
        setMyaddedfoods(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });

  }, [user, email, axiosSecure]);

  const handleUpdate = (e) => {
    e.preventDefault()

    const from = e.currentTarget
    const id = from.id.value
    const name = from.name.value
    const email = from.email.value
    const food_name = from.food_name.value
    const food_image = from.food_image.value
    const category = from.category.value
    const quantity = from.quantity.value
    const price = from.price.value
    const description = from.description.value
    const food_origin = from.food_origin.value
    const AddBy = { Name: name, Email: email }
    const productDetails = { AddBy, FoodName: food_name, FoodImage: food_image, FoodCategory: category, Quantity: quantity, Price: price, FoodOrigin: food_origin, Description: description }

    axiosSecure.put(`/updatemyaddedfood/${id}`, productDetails)
      .then(function (response) {
        if (response.data.acknowledged) {
          const remaing = myaddedfoods.filter(item => item._id !== id)
          setMyaddedfoods([...remaing, productDetails]);

          document.getElementById('my_modal_88').close()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Food Item has been update",
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
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/deletemyfood/${id}`)
          .then(res => {
            const remaing = myaddedfoods.filter(item => item._id !== id)
            setMyaddedfoods(remaing)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            console.log(res.data)
          })
      }
    });


  }


  return (<>
    <div>
      <HelmetTitle text={'My Added Foods'} />
      <BannerCommon location="My Added Foods"></BannerCommon>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 w-11/12 mx-auto">
        {
          myaddedfoods.map((food, idx) => {
            const { Description, FoodOrigin, FoodCategory, FoodImage, FoodName, Price, Quantity, _id } = food
            return (
              <>
                <div key={idx} className="card w-96 bg-base-100 shadow-xl mx-auto">
                  <figure><img src={FoodImage} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {FoodName}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="flex justify-around items-center">
                      <p>{FoodCategory}</p>
                      <p>${Price}</p>
                      <p>Quantity: {Quantity}</p>
                    </div>
                    <p>{Description.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                      <div onClick={() => document.getElementById('my_modal_88').showModal()} className="badge badge-outline">Update</div>
                      <div onClick={() => handleDelete(_id)} className="badge badge-outline">Delete</div>
                    </div>
                  </div>
                </div>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_88" className="modal">
                  <div className="modal-box w-11/12 max-w-3xl">
                    <h3 className="font-bold text-lg">Update your Food</h3>
                    <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-8">
                      <form onSubmit={handleUpdate}>
                        <input name="id" defaultValue={_id} type="text" className="hidden" />
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                          <div>
                            <label htmlFor="food_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                            <input defaultValue={FoodName} name="food_name" type="text" id="food_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Food Name" required />
                          </div>
                          <div>
                            <label htmlFor="food_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image</label>
                            <input defaultValue={FoodImage} name="food_image" type="text" id="food_image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Food Image" required />
                          </div>
                          <div>
                            <label htmlFor="food_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Category</label>
                            <input defaultValue={FoodCategory} name="category" type="text" id="food_category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required />
                          </div>
                          <div>
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input defaultValue={Quantity} name="quantity" type="text" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required />
                          </div>
                          <div>
                            <label htmlFor="food_origin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Origin</label>
                            <input defaultValue={FoodOrigin} name="food_origin" type="text" id="food_origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                          </div>
                          <div>
                            <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input defaultValue={Price} name="price" type="number" id="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
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
                          <textarea defaultValue={Description} name="description" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ingredients, making procedure, etc."></textarea>
                        </div>
                        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Update" />
                      </form>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            )
          })
        }
      </div>
    </div >

  </>);
}









