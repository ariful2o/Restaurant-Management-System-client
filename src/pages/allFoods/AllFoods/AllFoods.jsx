import { useLoaderData } from "react-router-dom"
import BannerCommon from "../../../components/BannerCommon"
import ProductCard from "../../../components/ProductCard"

export default function AllFoods() {
  const allFoods = useLoaderData()
  return (
    <div className="bg-base-300">
      <BannerCommon location="All Foods"></BannerCommon>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-20">
        {allFoods.map(foodItem => <ProductCard key={foodItem._id} foodItem={foodItem}></ProductCard>)
        }
      </div>
    </div>
  )
}
