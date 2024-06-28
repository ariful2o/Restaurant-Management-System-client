import PropTypes from 'prop-types';

import { useState } from 'react';

function GalaryCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const {Name,Photo_URL,Foood_Name,Description}=item
  
  return (
    <>
      <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={Photo_URL} alt={Foood_Name} className={`block w-full h-full max-h-80 transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-100'} ${isHovered ? 'scale-110' : 'scale-100'}`} />
        {isHovered && (
          <div className="absolute top-1/4 lg:top-1/2 left-1/2 transform -translate-x-[48%] lg:-translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/2 bg-black bg-opacity-75 text-white p-4 rounded w-full h-full">
            <div className=" flex flex-col justify-between items-center mt-20 lg:mt-28">
              <p className="text-center text-xl font-cormorant mb-3">{Foood_Name}</p>
              <p className="text-center font-extralight">{Name}</p>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
}

export default GalaryCard;
GalaryCard.propTypes = {
  item: PropTypes.object.isRequired
}
