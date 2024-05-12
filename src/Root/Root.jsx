import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../pages/home/share/Navbar";


export default function Root() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
