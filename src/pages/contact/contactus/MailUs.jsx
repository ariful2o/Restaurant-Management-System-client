import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";

export default function MailUs() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 my-20">
            <div className="w-full md:w-1/2 p-8 space-y-6">
                <h2 className="text-4xl font-cormorant font-bold">Contact Information</h2>
                <p className="text-xl text-[#555555] font-josefin">Bring the table winwin survival strateges ensure proactive domination the end of the day going real times multiple touchpoints.</p>
                <div className="flex items-center">
                    <IoLocationSharp className="bg-[#292E36] text-white w-10 h-10 p-2 rounded-full" />
                    <p className="text-xl text-[#555555] font-josefin ml-4">Riverside 25, San Francisco, California</p>
                </div>
                <div className="flex items-center">
                    <IoIosMail className="bg-[#292E36] text-white w-10 h-10 p-2 rounded-full" />
                    <p className="text-xl text-[#555555] font-josefin ml-4">evanmattew@mail.com</p>
                </div>
                <div className="flex items-center">
                    <TbPhoneCall className="bg-[#292E36] text-white w-10 h-10 p-2 rounded-full" />
                    <p className="text-xl text-[#555555] font-josefin ml-4">800-234-567</p>
                </div>
                <div className="flex justify-end">
                <div className="flex gap-6 mr-10">
                    <FaFacebook className="bg-[#292E361A] rounded-full w-10 h-10 p-2" />
                    <FaTwitter className="bg-[#292E361A] rounded-full w-10 h-10 p-2" />
                    <FaInstagram className="bg-[#292E361A] rounded-full w-10 h-10 p-2" />
                    <FaPinterest className="bg-[#292E361A] rounded-full w-10 h-10 p-2" />
                </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-8">

                <h5 className="text-md  border border-b-[#E1B168] border-x-0 border-t-0 my-8 w-20 ">Mail Us</h5>
                <h2 className="text-4xl font-cormorant font-bold mb-8">Have a Question?</h2>
                <form>
                    <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input type="email" id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                            <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Subject" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" required />
                        </div>
                        <div className="col-span-2">

                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>

                        </div>
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    )
}
