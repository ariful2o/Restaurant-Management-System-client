
import PropTypes from 'prop-types';
export default function CustomButton({ text, func }) {
  return (
    <button onClick={func} className="border-2 border-[#E1B168] px-8 py-4 text-[#E1B168]">{text}</button>
  )
}
CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func
}