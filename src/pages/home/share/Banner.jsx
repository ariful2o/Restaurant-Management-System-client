
export default function Banner() {
    return (
        <div className=" min-h-[600px] bg-[#292E36] mb-10">
            <div className="flex flex-col lg:flex-row-reverse  justify-between items-center">
                <div className=" w-[656px] ">

                    <div className="bg-[#393D44] w-[450px] h-[500px] rounded-t-[220px] mt-28 relative">
                        <img src="https://i.ibb.co/3FP4G6b/Photo.jpg" className="rounded-t-[220px] p-5 absolute top-1"/>
                    </div>
                </div>
                <div className="text-white max-w-xl mx-auto">
                    <h1 className="text-6xl font-bold font-cormorant">Welcome to<br />Restaurantate</h1>
                    <p className="py-6 font-josefin">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="py-5 px-16 border-2 mt-10 border-[#E1B168]">View Menu</button>
                </div>
            </div>
        </div>
    )
}

// https://i.ibb.co/THqCwP8/Photo-1.png
// https://i.ibb.co/F5c4BXG/Photo-1.jpg
// https://i.ibb.co/fQFnzdN/Photo.png
// 