import { IoIosMail } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";

export default function VisitUs() {
    return (
        <div>
            <h5 className="text-md text-center border border-b-[#E1B168] border-x-0 border-t-0 my-8 w-20 mx-auto">VISIT US</h5>
            <h2 className="text-4xl font-cormorant font-bold text-center">Come and visit our Branches</h2>
            <div className="flex flex-col md:flex-row gap-10 my-20 justify-center items-center">
                <div className="flex gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-cormorant font-black">Los Angeles, CA</h2>
                        <p className="text-[#4A4A4A] font-josefin">Riverside 25, San Francisco California</p>
                        <div className="flex items-center gap-4">
                            <IoIosMail />
                            <p className="text-[#4A4A4A] font-josefin">contact@restaurantate.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <TbPhoneCall />
                            <p className="text-[#4A4A4A] font-josefin">(487) 870 - 1087</p>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/bRCTDjK/Photo-8.jpg" alt="" />
                </div>
                <div className="flex gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-cormorant font-black">NEW YOKE, USA</h2>
                        <p className="text-[#4A4A4A] font-josefin">Riverside 35, San Francisco USA</p>
                        <div className="flex items-center gap-4">
                            <IoIosMail />
                            <p className="text-[#4A4A4A] font-josefin">contact@restaurantate.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <TbPhoneCall />
                            <p className="text-[#4A4A4A] font-josefin">(487) 830 - 1007</p>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/k1nMFrp/Photo-6.png" alt="" />
                </div>
            </div>
        </div>
    )
}

