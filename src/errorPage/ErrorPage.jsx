
import { Link, useRouteError } from "react-router-dom";
import HelmetTitle from "../components/HelmetTitle";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-white my-20 text-center">
      <HelmetTitle text={'Error Page'}></HelmetTitle>
      <img className="w-full max-h-[481px]" src="https://i.ibb.co/fXyBD3v/404.png" alt="" />
      <div className="my-20 space-y-7">
        <h1 className="text-4xl font-bold text-black font-cormorant">Whoops, Nothing delicious to find here!</h1>
        <p className="text-[#555555] text-xl font-josefin">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link to='/'>
          <button className="bg-[#E1B168] text-[#292E36] my-12 px-11 py-5">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}