import { useContext } from "react";
import Swal from "sweetalert2";
import TimePicker from "../../../components/TimePicker";
import { AuthContext } from "../../../provider/AuthProvider";
import DatePick from "../../../components/DatePick";


export default function BookaTable() {
    const { user } = useContext(AuthContext)
    const handleBookaTable = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Table Booking has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    return (
        <div className="lg:hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/F5c4BXG/Photo-1.jpg)' }}>
            <div className="lg:hero-overlay bg-opacity-0"></div>
            <div className="lg:hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <div className="text-white bg-[#292E36] py-20 mt-8">
                        <div className="px-20 mx-auto my-20">
                            <div className="text-center space-y-5 my-6">
                                <h4 className="text-md font-josefin inline-block border-x-0 border-2 border-y-[#E1B168]">Reservation</h4>
                                <h2 className="text-2xl lg:text-4xl font-cormorant">Book your table now</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 my-10">
                                <input defaultValue={user?.displayName} className="border col-span-3 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Name" />
                                <input defaultValue={user?.email} className="border col-span-3 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Email" />
                                <input className="border col-span-2 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Person" />
                                <div className="col-span-2">
                                <TimePicker></TimePicker>
                                </div>
                                <div className="col-span-2">
                                <DatePick ></DatePick>
                                </div>
                            </div>
                            <div className="justify-center flex">
                                <button onClick={handleBookaTable} className="bg-white text-black px-8 py-4">Book a Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
