import { useEffect } from "react"
import auth from "../../../../firebase/firebase.init"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"


export default function MyOrderedFood() {
  const axiosSecure = useAxiosSecure()
  const email = auth.currentUser?.email
  useEffect(() => {
    axiosSecure.get(`/order/${email}`)
      .then(res => console.log(res.data))
  }, [])
  return (
    <div>

    </div>
  )
}