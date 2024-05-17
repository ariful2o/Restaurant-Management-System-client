import { TfiEmail } from "react-icons/tfi";


export default function Footer() {
    return (
        <>
            <footer className="footer place-items-center p-10 bg-[#1F242C] text-white ">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between">
                    <h4 className="text-xl font-josefin hover:underline">Instagram Feed</h4>
                    <img src="https://i.ibb.co/ZmTjskL/Logo.png" alt="" />
                    <nav className="md:place-self-center lg:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                </div>
            </footer>
            <footer className="footer place-items-center px-10 py-4 bg-[#1F242C] text-white border-base-300">
                <aside className="items-center grid-flow-row">
                    <p className="border-2 uppercase border-b-[#E1B168] border-x-0 border-t-0">Contact</p>
                    <p>5 Rue Dalou, 75015 Paris.<br />Providing reliable tech since 1998</p>
                    <p><span className="text-[#E1B168]">Call -</span> +33 156 78 89 56</p>
                    <span className="text-[#E1B168]">benoit@mail.com</span>
                </aside>
                <div className="">
                    <h6 className="font-cormorant text-center mx-auto"> Join our mailing list for updates,<br />
                        Get news & offers events.</h6>
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <TfiEmail />
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                            <button type="submit" className="text-[#292E36] absolute end-2.5 bottom-2.5 bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Subscribe</button>
                        </div>
                    </form>

                </div>
                <nav className="md:place-self-center md:justify-self-center">
                    <div className="grid grid-flow-row gap-4">
                        <p className="border-2 uppercase border-y-[#E1B168] border-x-0 text-center">Working Hours</p>
                        <p><span className="text-[#E1B168]">Mon – Fri:</span> 7.00am – 6.00pm</p>
                        <p><span className="text-[#E1B168]">Mon – Fri:</span> 7.00am – 6.00pm</p>
                        <p><span className="text-[#E1B168]">Sun:</span>  8.00am – 6.00pm</p>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Restaurantate</p>
                </aside>
            </footer>
        </>
    )
}
