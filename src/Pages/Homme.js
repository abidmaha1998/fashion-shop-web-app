import { Components } from "antd/lib/date-picker/generatePicker";
import { Component } from "react";
import Navbar from "../Components/Showcase/Navbar";
import NavbarFemme from "../Components/Showcase/NavbarFemme";
const Homme = () => {
    return ( 
        <>
        <Navbar activeMenu="homme"/>
        <NavbarFemme/>
        </>
        
     );
}
 
export default Homme;