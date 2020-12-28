import ComptCat from "../Components/Showcase/CompCat";
import Navbar from "../Components/Showcase/Navbar";
import NavbarFemme from "../Components/Showcase/NavbarFemme";
import CompSlider from "../Components/Showcase/CompSlider";
import CompImg from "../Components/Showcase/CompImage";
const Femme = () => {
    return ( 
        <>
        <Navbar />
        <NavbarFemme/>
        <CompImg/>
        <ComptCat/>
        <CompSlider/>
        </>
     );
}
 
export default Femme;