import { useContext } from "react"
import { AuthContext } from "../../../../provider/AuthProvider"
import BannerCommon from "../../../../components/BannerCommon"


export default function MyOrderedFood() {
  const { myOrdersItems, ordersWithIds } = useContext(AuthContext)
  console.log(ordersWithIds)

  return (
    <div className="bg-base-300">
      <BannerCommon location="My Order Foods"></BannerCommon>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myOrdersItems.map(item => {
              const { FoodName, FoodImage, Price } = item
              const orderId = ordersWithIds.find(id => id.orderId === item._id)
              const date = new Date(orderId?.date)
              return (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={FoodImage} className="w-16 md:w-32 max-w-full max-h-full" alt={FoodName} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {FoodName}
                  </td>
                  <td className="px-6 py-4">
                    {orderId.contatie}
                  </td>
                  <td className="px-6 py-4">
                    {date.toString().replace(/GMT.*$/, '')}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${Price}
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}