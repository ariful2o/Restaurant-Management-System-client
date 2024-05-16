
export default function Banner() {
    return (
        <div className=" min-h-[600px] bg-[#292E36] mb-10">
            <div className="flex flex-col md:flex-row-reverse  justify-between items-center">
                <div className="w-full lg:w-[656px] ">
                    <div className="bg-[#393D44] w-80 lg:w-[450px] h-[400px] lg:h-[500px] rounded-t-[220px] mt-28 relative">
                        <img src="https://i.ibb.co/3FP4G6b/Photo.jpg" className="rounded-t-[220px] p-5 absolute top-1"/>
                    </div>
                </div>
                <div className="text-white max-w-xl mx-auto">
                    <h1 className="text-3xl lg:text-6xl font-bold font-cormorant">Welcome to<br />Restaurantate</h1>
                    <p className="py-6 font-josefin">Where Every Bite Tells a Story
Indulge in Culinary Excellence & Cultural Delights</p>
                    <div className="flex justify-center mb-7">
                    <button className="py-5 px-16 border-2 mt-10 border-[#E1B168]">View Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}