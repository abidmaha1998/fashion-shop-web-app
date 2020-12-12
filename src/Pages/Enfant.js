import { Components } from "antd/lib/date-picker/generatePicker";
import { Component } from "react";
import Navbar from "../Components/Showcase/Navbar";
import NavbarFemme from "../Components/Showcase/NavbarFemme";
const Enfant = () => {
    return ( 
        <>
        <Navbar activeMenu="enfant"/>
        <NavbarFemme/>
        </>
        
     );
}
 
export default Enfant;