

export default function BookaTable() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/v3tXyvq/Photo.jpg)' }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <div className="text-white bg-[#292E36] py-20 mt-8">
                        <div className="px-20 mx-auto my-20">
                            <div className="text-center space-y-5 my-6">
                                <h4 className="text-md font-josefin inline-block border-x-0 border-2 border-y-[#E1B168]">Reservation</h4>
                                <h2 className="text-4xl font-cormorant">Book your table now</h2>
                            </div>
                            <div className="grid grid-cols-6 gap-8 my-10">
                                <input className="border col-span-3 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Name" />
                                <input className="border col-span-3 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Email" />
                                <input className="border col-span-2 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Person" />
                                <input className="border col-span-2 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Timing" />
                                <input className="border col-span-2 border-[#FFFFFF] px-8 py-4 bg-[#292E36]" type="text" name="" id="" placeholder="Date" />
                            </div>
                            <div className="justify-center flex">
                                <button className="bg-white text-black px-8 py-4">Book a Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
