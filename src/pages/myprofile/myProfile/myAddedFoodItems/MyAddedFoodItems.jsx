import axios from "axios";
import { useContext, useEffect, useState } from "react";
import HelmetTitle from "../../../../components/HelmetTitle";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

export default function MyAddedFoodItems() {
  const { user } = useContext(AuthContext);
  const [myaddedfoods, setMyaddedfoods] = useState([]);
  const email = user?.email;
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const url = `/myaddfoods/${email}`;

    axiosSecure.get(url)
      .then(res => {
        console.log('inside add my food items',res.data);
        setMyaddedfoods(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
  
      });

  }, [user, email, axiosSecure]);

  return (
    <div>
      <HelmetTitle text={'My Added Foods'} />
      {/* Render the added foods here */}
    </div>
  );
}
