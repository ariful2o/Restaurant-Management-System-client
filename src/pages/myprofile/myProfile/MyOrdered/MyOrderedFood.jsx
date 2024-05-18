import { useContext } from "react"
import { AuthContext } from "../../../../provider/AuthProvider"
import BannerCommon from "../../../../components/BannerCommon"
import GetConnected from "./GetConnected"
import ResentOrder from "./ResentOrder"
import HelmetTitle from "../../../../components/HelmetTitle"


export default function MyOrderedFood() {
  const { myOrdersItems, ordersWithIds } = useContext(AuthContext)

  return (
    <div className="bg-base-300">
      <HelmetTitle text={'My Order Foods'}></HelmetTitle>
      <BannerCommon location="My Order Foods"></BannerCommon>
      <GetConnected />
      <div className="bg-[#1F242C] mt-10 p-10">
        <div className="text-center text-white space-y-6">
          <h6 className="border-2 border-y-[#E1B168] border-x-0 inline-block mt-8 uppercase text-sm font-josefin">The main Food</h6>
          <h2 className="text-4xl font-bold font-cormorant text-white">Recently Orders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
          {myOrdersItems.map(item => {
            const orderId = ordersWithIds.find(id => id.orderId === item._id)
            const date = new Date(orderId?.date)
            return (
              <ResentOrder key={item._id} item={item} date={date}></ResentOrder>
            )
          })}
        </div>
      </div>
    </div>
  )
}