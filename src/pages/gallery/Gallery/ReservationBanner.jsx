
export default function ReservationBanner() {
    return (
        <div className="min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/GPZPMhR/Photo-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content max-w-3xl h-[500px] flex items-center">
                <div className="max-w-md space-y-8 mx-auto">
                    <h1 className="mb-5 text-5xl font-bold font-cormorant">This evening
                        will be graet!</h1>
                    <p className="mb-5 font-josefin">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="flex text-white gap-8">
                    <button className="border-2 border-[#E1B168] text-[#E1B168] px-8 py-4">Book a Table</button>
                    <button className="font-cormorant">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
