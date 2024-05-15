import { useContext } from "react"
import { AuthContext } from "../../../../provider/AuthProvider"
import OrderDetailsCard from "../../OrderDetailsCard"


export default function MyOrderedFood() {
 const {myorders}=useContext(AuthContext)
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Add to Cart" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Add to Cart</div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Orders" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><OrderDetailsCard myorders={myorders}></OrderDetailsCard></div>

      
      </div>
    </div>
  )
}