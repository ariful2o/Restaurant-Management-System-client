import { useContext } from "react"
import BannerCommon from "../../../components/BannerCommon"
import HelmetTitle from "../../../components/HelmetTitle"
import ProductCard from "../../../components/ProductCard"
import { AuthContext } from "../../../provider/AuthProvider"

export default function AllFoods() {
  const { allFoods } = useContext(AuthContext)
  return (
    <>
    <HelmetTitle text={'All Foods'}></HelmetTitle>
      <div className="bg-base-300">
        <BannerCommon location="All Foods"></BannerCommon>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  md:gap-20 my-20 mx-auto w-full md:w-11/12">
          {allFoods.map(foodItem => <ProductCard key={foodItem._id} foodItem={foodItem}></ProductCard>)
          }
        </div>
      </div>
    </>
  )
}
