import { useLoaderData } from "react-router-dom";
import GalaryCard from "./Gallery/GalaryCard";
import BannerCommon from "../../components/BannerCommon";
import ReservationBanner from "./Gallery/ReservationBanner";


export default function Gallery() {
  const allFoods = useLoaderData()
  return (
    <div>
      <BannerCommon location="Gallery"></BannerCommon>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {
          // allFoods.map(food => <GalaryCard key={food._id} food={food}></GalaryCard>)
        }
      </div>
      <GalaryCard/>
      <ReservationBanner />
    </div>
  )
}
