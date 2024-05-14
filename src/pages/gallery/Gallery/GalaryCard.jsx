import PropTypes from 'prop-types';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function GalaryCard({ food }) {
  const [isHovered, setIsHovered] = useState(false);

  console.log(food)

  return (
    <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={food?.FoodImage} alt="Your Image" className={`block w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-100'} ${isHovered ? 'scale-110' : 'scale-100'}`} />
      {isHovered && (
        <Link to={`/foods/${food?._id}`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-4 rounded">
            <p className="text-center text-xl font-cormorant mb-3">{food?.FoodName}</p>
            <p className="text-center font-extralight">{food?.FoodOrigin}</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default GalaryCard;
GalaryCard.propTypes = {
  food: PropTypes.object.isRequired
}
