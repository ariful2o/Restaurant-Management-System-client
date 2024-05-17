import BannerCommon from "../../../../components/BannerCommon";
import HelmetTitle from "../../../../components/HelmetTitle";
import From from "../../From";



export default function AddaFoodItems() {
  return (
    <div>
      <HelmetTitle text={`Add Food Item`}></HelmetTitle>
      <BannerCommon location={`Add Food Item`}></BannerCommon>
      <From></From>
    </div>
  )
}

