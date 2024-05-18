import Button from '../../../../components/CustomButton'

export default function GetConnected() {
  const func = () => {
    console.log('from getComected button')
  }

  return (
    <div>
      <div className="text-center space-y-6">
        <h6 className="border-2 border-y-[#E1B168] inline-block mt-8 uppercase text-sm font-josefin">get connected</h6>
        <h2 className="text-4xl font-bold font-cormorant text-[#292E36]">Order Via App</h2>
        <p className="text-[#555555] font-josefin max-w-3xl mx-auto">Ordering via an app offers unparalleled convenience and efficiency, allowing customers to place orders anytime, anywhere. With personalized recommendations, contactless transactions, and real-time order tracking, the app experience enhances customer satisfaction and loyalty. Businesses benefit from streamlined operations, reduced costs, and valuable data insights for targeted marketing. Moreover, special offers and discounts incentivize orders, driving revenue and fostering brand loyalty.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 max-w-7xl mx-auto my-20">
          <img className='mx-auto border border-[#DCDCDC] p-8 rounded-xl h-32 w-96' src="https://i.ibb.co/mzQXsmS/Group-4.png" alt="" />
          <img className='mx-auto border border-[#DCDCDC] p-8 rounded-xl h-32 w-96' src="https://i.ibb.co/nM0rbyS/Group-3.png" alt="" />
          <img className='mx-auto border border-[#DCDCDC] p-8 rounded-xl h-32 w-96' src="https://i.ibb.co/x3JXPwx/Group-2.png" alt="" />
          <img className='mx-auto border border-[#DCDCDC] p-8 rounded-xl h-32 w-96' src="https://i.ibb.co/j5VLjYV/Group-1.png" alt="" />
          <img className='mx-auto border border-[#DCDCDC] p-8 rounded-xl h-32 w-96' src="https://i.ibb.co/k2nMr2d/Group-27.png" alt="" />
          <img className='mx-auto border border-[#DCDCDC] p-8 rounded-xl h-32 w-96' src="https://i.ibb.co/jytMsSd/Group.png" alt="" />
        </div>
        <Button text='Order Now' func={func}></Button>
      </div>
    </div>
  )
}
