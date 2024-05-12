

export default function TheStory() {
    return (
        <div className='bg-[#fff8f5]'>
            <div className="flex flex-col lg:flex-row justify-around gap-24 my-24">
                <div className="flex gap-3 items-center">
                    <img className="bg-[#292E36] w-20 h-20 rounded-full p-4" src="https://i.ibb.co/7Wvyh3V/Location.png" alt="" />
                    <div className="space-y-2">
                        <h4 className="text-xl font-cormorant font-semibold">Locate Us</h4>
                        <p className="">Riverside 25 Son Francisco, California</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img className="bg-[#292E36] w-20 h-20 rounded-full p-4" src="https://i.ibb.co/74rjn0X/Group-42.png" alt="" />
                    <div className="space-y-2">
                        <h4 className="text-xl font-cormorant font-semibold">Open Hours</h4>
                        <p className="">Mon To Fri 9:00 AM - 9:00 PM</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img className="bg-[#292E36] w-20 h-20 rounded-full p-4" src="https://i.ibb.co/fnPgBSt/Reserve.png" alt="" />
                    <div className="space-y-2">
                        <h4 className="text-xl font-cormorant font-semibold">Reseravation</h4>
                        <p className="">hirestaurantate@gmail.com</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row gap-28">
                <div className="w-full lg:w-1/2">
                    <img className='w-full lg:pl-10' src="https://i.ibb.co/F5c4BXG/Photo-1.jpg" alt="" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-[#292E36] font-cormorant text-4xl">The Story</h2>
                    <p className="text-[#555555]">Once upon a time in a quaint village nestled amidst rolling hills and lush greenery, there lived a young girl named Lily. With her unruly curls and bright blue eyes, Lily was a curious soul, always eager to explore the world around her.<br/>

One crisp autumn morning, as the golden leaves danced in the gentle breeze, Lily set out on an adventure into the forest that bordered her village. Armed with nothing but her imagination and a wicker basket, she skipped along the winding path, her heart brimming with excitement.</p>
                    <div className="flex gap-8 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-cormorant">1996</h2>
                            <p className="text-[#555555]">In 1996, the seeds of innovation were sown as the internet began to gain momentum worldwide. It was a time of excitement and exploration, with individuals and businesses alike eager to harness the power of this new digital frontier.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-cormorant">2024</h2>
                            <p className="text-[#555555]">By 2024, BistroTech had become a household name in the restaurant industry, with thousands of establishments relying on its platform to power their businesses. From quaint neighborhood cafes to Michelin-starred fine dining establishments, BistroTech had earned the trust and loyalty of restaurateurs around the world.</p>
                        </div>
                    </div>
                    <h2 className="text-2xl font-cormorant">JOSEFINE</h2>
                    <img src="https://i.ibb.co/VDFPdck/Josefine.png" alt="" />
                </div>
            </div>
        </div>
    )
}
