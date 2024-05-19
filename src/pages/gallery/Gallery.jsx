import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerCommon from "../../components/BannerCommon";
import { AuthContext } from "../../provider/AuthProvider";
import Feature from "./Gallery/Feature";
import GalaryCard from "./Gallery/GalaryCard";
import ReservationBanner from "./Gallery/ReservationBanner";
import HelmetTitle from "../../components/HelmetTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


export default function Gallery() {
  const { user } = useContext(AuthContext)
  const username = user?.displayName
  const navigite = useNavigate()
  const axisoSecure = useAxiosSecure()
  const [gallery, setGallery] = useState([])
  const handleShowModal = () => {
    if (!user) {
      navigite('/login')
      return
    }
    document.getElementById('my_modal_3').showModal()
  }

  const handlePost = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    // const data = Object.fromEntries(formData.entries())
    const Name = form.username.value
    const Photo_URL = form.photo.value
    const Foood_Name = form.foodname.value
    const Description = form.description.value
    const details = { Name, Photo_URL, Foood_Name, Description }

    axisoSecure.post('/addgallery', details)
      .then(res => {
        setGallery([...gallery, details])
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Post Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(res.data)
      }).catch(err => console.error(err))

  }

  useEffect(() => {
    axisoSecure.get('/gallery')
      .then(res => {
        setGallery(res.data)
        console.log(res.data)
      }).catch(err => console.error(err))
  }, [gallery])
  return (
    <div>
      <HelmetTitle text={'Gallery'}></HelmetTitle>
      <BannerCommon location="Gallery"></BannerCommon>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto w-full md:w-11/12">
        {
          gallery.map(item => <GalaryCard key={item._id} item={item}></GalaryCard>)
        }
      </div>
      <div className="flex justify-center my-20 w-full">

        <button onClick={handleShowModal} className="border-2 border-[#E1B168] text-[#E1B168] px-8 py-4">Add</button>
      </div>
      <ReservationBanner />
      <Feature />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Share Your experience!</h3>
          <form className="p-4 md:p-5" onSubmit={handlePost}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                <input name="username" defaultValue={username} disabled type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name" required="" />
              </div>
              <div className="col-span-2">
                <label htmlFor="foodname" className="block mb-2 text-sm font-medium text-gray-900 ">Food Name</label>
                <input type="text" name="foodname" id="foodname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name" required="" />
              </div>
              <div className="col-span-2">
                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 ">Image url</label>
                <input type="text" name="photo" id="pjoto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="http;//exampule.jpg" required="" />
              </div>

              <div className="col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Feedback</label>
                <textarea name="description" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your experience here"></textarea>
              </div>
            </div>
            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
              Post
            </button>
          </form>
        </div>
      </dialog>
    </div>
  )
}
