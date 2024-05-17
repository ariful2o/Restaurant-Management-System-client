import HelmetTitle from "../../../components/HelmetTitle";
import DropdownMenu from "./DropdownMenu";

export default function MyProfile() {
  
  return (
    <div className="bg-gray-200 py-20">
      <HelmetTitle text={'Profile'}></HelmetTitle>
      <DropdownMenu></DropdownMenu>
    </div>
  )
}
