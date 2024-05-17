import axios from "axios"
import { useContext, useEffect, useState } from "react"
import HelmetTitle from "../../../../components/HelmetTitle"
import { AuthContext } from "../../../../provider/AuthProvider"

export default function MyAddedFoodItems() {
  const { user } = useContext(AuthContext)
const [myaddedfoods,setMyaddedfoods]=useState([])
const email=user.email
useEffect(()=>{
  axios.get(`https://restaurant-management-server-lac.vercel.app/myaddfoods/${email}`,{withCredentials:true})
  .then(res=>setMyaddedfoods(res.data))
  .catch(err=>console.error(err))
},[user])
  console.log(email)
  console.log(myaddedfoods)
  return (
    <div>
      <HelmetTitle text={'My add Foods'}></HelmetTitle>
    </div>
  )
}
