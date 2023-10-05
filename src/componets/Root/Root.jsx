import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";




const Root = () => {
    return (
        <div  style={{backgroundImage: 'url(https://i.ibb.co/t2Bkg1x/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg)' , backgroundSize: "cover", backgroundRepeat: "no-repeat", }}>

            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;