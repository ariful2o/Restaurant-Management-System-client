

export default function WhatWeMake() {
  return (
    <div className="max-h-[900px]">
      <h5 className="text-md text-center border border-b-[#E1B168] border-x-0 border-t-0 my-8 w-20 mx-auto">Galary</h5>
        <h2 className="text-4xl font-cormorant font-bold text-center">What We Make</h2>
        <div className="grid grid-cols-4 gap-2 pt-14 p-60">
            <img className="w-full h-full" src="https://i.ibb.co/5KrJVRz/Photo-3.jpg" alt="" />
            <img className="col-span-2 row-span-2 h-full" src="https://i.ibb.co/4Fy0y1D/Photo-5.jpg" alt="" />
            <img className="w-full h-full" src="https://i.ibb.co/kXvDVhZ/Photo-7.jpg" alt="" />
            <img className="w-full h-full" src="https://i.ibb.co/10S4Zys/Photo-4.jpg" alt="" />
            <img className="w-full h-full" src="https://i.ibb.co/58TnDy0/Photo-6.jpg" alt="" />
        </div>
    </div>
  )
}
