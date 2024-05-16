import PropTypes from 'prop-types';

import { useState } from 'react';
import auth from '../../../firebase/firebase.init';

function GalaryCard({ food }) {
  const [isHovered, setIsHovered] = useState(false);

const username=auth?.currentUser?.displayName
  return (
    <>
      <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={food?.FoodImage} alt={food.FoodName} className={`block w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-100'} ${isHovered ? 'scale-110' : 'scale-100'}`} />
        {isHovered && (
          <div className="absolute top-1/4 lg:top-1/2 left-1/2 transform -translate-x-[48%] lg:-translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/2 bg-black bg-opacity-75 text-white p-4 rounded w-full h-full">
            <div className=" flex flex-col justify-between items-center mt-20 lg:mt-40">
              <p className="text-center text-xl font-cormorant mb-3">{food?.FoodName}</p>
              <p className="text-center font-extralight">{food?.FoodOrigin}</p>
              <p onClick={() => document.getElementById('my_modal_3').showModal()} className="text-center font-cormorant font-bold border-2 border-white mt-6 px-8 py-2">Add</p>
            </div>
          </div>
        )}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Share Your experience!</h3>
          <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input defaultValue={username} disabled type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name" required=""/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Image url</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="http;//exampule.jpg" required=""/>
                    </div>
                   
                    <div className="col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Feedback</label>
                        <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your experience here"></textarea>                    
                    </div>
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Post
                </button>
            </form>
        </div>
      </dialog>
    </>
  );
}

export default GalaryCard;
GalaryCard.propTypes = {
  food: PropTypes.object.isRequired
}
