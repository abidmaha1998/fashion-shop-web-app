import ComptCat from "../Components/Showcase/CompCat";
import CompImg from "../Components/Showcase/CompImage";
import Navbar from "../Components/Showcase/Navbar";
import NavbarFemme from "../Components/Showcase/NavbarFemme";
import CompSlider from "../Components/Showcase/CompSlider";
const Femme = () => {
    return ( 
        <>
        <Navbar activeMenu="femme"/>
        <NavbarFemme/>
        <CompImg/>
        <ComptCat/>
        <CompSlider/>
        </>
     );
}
 
export default Femme;