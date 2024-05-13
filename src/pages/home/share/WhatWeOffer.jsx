
export default function WhatWeOffer() {
    return (
        <div className="bg-[#292E36] h-96 flex flex-col lg:flex-row items-center justify-center">
            <div className="w-1/2 flex justify-center">
                <div className="mx-auto text-white space-y-2">
                    <h2 className=" text-xs font-josefin font-semibold">What We Offer</h2>
                    <h2 className=" text-4xl font-cormorant font-semibold">Our Great Services</h2>
                    <p className="font-josefin">We offer a wide range of foods and drinks to suit your taste buds.</p>
                </div>
            </div>
            <div className="flex gap-10 w-1/2 justify-center items-center">
                <div className="bg-[#323841] p-4">
                    <div className="bg-[#292E36] flex flex-col justify-center items-center p-6">
                        <img src="https://i.ibb.co/XSkm1Qq/Icon.png" alt="" />
                        <h4 className="text-white font-cormorant">Opened 24/7</h4>
                    </div>
                </div>
                <div className="bg-[#323841] p-4">
                    <div className="bg-[#292E36] flex flex-col justify-center items-center p-6">
                        <img src="https://i.ibb.co/NZbsB8D/Icon-1.png" alt="" />
                        <h4 className="text-white font-cormorant">Special Menus</h4>
                    </div>
                </div>
                <div className="bg-[#323841] p-4">
                    <div className="bg-[#292E36] flex flex-col justify-center items-center p-6">
                        <img src="https://i.ibb.co/fkw7SxJ/Icon-2.png" alt="" />
                        <h4 className="text-white font-cormorant">Home Delivery</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
