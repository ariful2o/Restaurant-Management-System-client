import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export default function BannerCommon({ location }) {
    return (
        <div className="hero h-80" style={{ backgroundImage: 'url(https://i.ibb.co/pdRCFxX/Photo.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mt-10 text-5xl font-bold font-cormorant text-white">{location}</h1>
                    <div className="flex gap-10 justify-center my-20 font-josefin">
                        <Link to='/'><p className="">Home</p></Link>
                        <p className="italic">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

BannerCommon.propTypes = {
    location: PropTypes.string.isRequired
}