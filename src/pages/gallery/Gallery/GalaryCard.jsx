import PropTypes from 'prop-types';

import { useState } from 'react';

function GalaryCard({ food }) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src="https://i.ibb.co/crgQRPY/Photo-3.jpg" alt="Your Image" className={`block transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-100'}`} />
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-4 rounded">
          <p className="text-center">Your Text Here</p>
        </div>
      )}
    </div>
  );
}

export default GalaryCard;
GalaryCard.propTypes = {
  food: PropTypes.object.isRequired
}
