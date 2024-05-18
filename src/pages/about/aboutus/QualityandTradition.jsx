import CustomButton from "../../../components/CustomButton";

export default function QualityandTradition() {
  const roundedImageStyles = {
    borderRadius: '0 130px 0 0',
    width: '400px',  // Example width, adjust as needed
    height: '450px', // Example height, adjust as needed
    overflow: 'hidden', // To ensure the image fits within the div
    backgroundImage: 'url("https://i.ibb.co/rxWGmfG/Photo.jpg")', // Your image path
    backgroundSize: 'cover', // Ensure the image covers the div
    backgroundPosition: 'center', // Center the image within the div
  };

  return (
    <div className="hero max-h-[800px] bg-base-200 pb-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="relative">
          <div style={roundedImageStyles} className="max-w-md rounded-lg shadow-2xl mt-10">
            {/* You can use an empty div with a background image or keep the img tag as per your preference */}
          </div>
          <div className="w-64 shadow-2xl rounded-md p-8 py-10 bg-slate-200 absolute -bottom-12 -left-10">
            <div className="flex gap-6 items-center">
              <img className="rounded-full" src="https://i.ibb.co/dL7PwPF/Photo-1.jpg" alt="" />
              <div>
                <h6 className="text-lg">Josefine</h6>
                <p className="font-josefin font-extralight text-xs">CEO & Founder</p>
              </div>
            </div>
            <p className="font-josefin font-extralight text-sm mt-4 text-[#555555]">Capitalize on low hanging fruit to identify a ballpark</p>
          </div>
        </div>
        <div className="max-w-4xl space-y-4">
          <p>About us</p>
          <h1 className="text-5xl font-bold font-cormorant">Quality and Tradition</h1>
          <p className="py-6 font-josefin">Sectors such as watchmaking, furniture making, and tailoring frequently highlight &quot;quality and tradition&quot; by showcasing the skills and techniques passed down through generations, ensuring each piece is crafted with the utmost care and expertise.</p>
          <p>JOSEFINE</p>
          <img src="https://i.ibb.co/VDFPdck/Josefine.png" alt="" />
          <CustomButton text="See More" />
        </div>
      </div>
    </div>
  );
}
