import { useContext, useEffect } from "react"
import { AuthContext } from "../../../../provider/AuthProvider"
import axios from "axios"
import HelmetTitle from "../../../../components/HelmetTitle"

export default function MyAddedFoodItems() {
  const {user}=useContext(AuthContext)
  useEffect(()=>{
    axios.get(`/myaddfoods/${user?.eamil}`)
    .then(res=>{
      console.log(res.data)
    })
  },[user])
  console.log(user?.email)
  return (
    <div>
      <HelmetTitle text={'My add Foods'}></HelmetTitle>
    </div>
  )
}
