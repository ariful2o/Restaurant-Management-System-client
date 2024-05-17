
import PropTypes from 'prop-types';
import StarRating from '../../../../components/StarRating';
export default function ResentOrder({ item, date }) {
    const { FoodName, FoodImage, Price } = item
    return (
        <div className='max-w-96 mx-auto bg-[#343942] space-y-4 p-4 shadow-2xl rounded-xl'>
            <div className="relative">
                <img src={FoodImage} alt="" />
                <p className="absolute bottom-4 left-1 backdrop-blur-2xl text-white text-xs">{date.toString().replace(/GMT.*$/, '')}</p>
            </div>
            <h2 className="text-2xl font-cormorant text-white">{FoodName}</h2>
            <img src="https://i.ibb.co/wc3mvfL/Line.png" alt="" />
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-cormorant text-white">${Price}</h2>
                <StarRating />
            </div>
        </div>
    )
}
ResentOrder.propTypes = {
    item: PropTypes.object.isRequired,
    date: PropTypes.object
}