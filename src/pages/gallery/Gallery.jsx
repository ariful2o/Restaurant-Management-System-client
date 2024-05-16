import { useContext } from "react";
import { Link } from "react-router-dom";
import BannerCommon from "../../components/BannerCommon";
import { AuthContext } from "../../provider/AuthProvider";
import Feature from "./Gallery/Feature";
import GalaryCard from "./Gallery/GalaryCard";
import ReservationBanner from "./Gallery/ReservationBanner";


export default function Gallery() {
  const {allFoods}=useContext(AuthContext)
  return (
    <div>
      <BannerCommon location="Gallery"></BannerCommon>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
          allFoods.map(food => <GalaryCard key={food._id} food={food}></GalaryCard>)
        }
      </div>
      <div className="flex justify-center my-20 w-full">
        <Link to='/allfoods'>
          <button className="border-2 border-[#E1B168] text-[#E1B168] px-8 py-4">View Menu</button>
        </Link>
      </div>
      <ReservationBanner />
      <Feature />
    </div>
  )
}
