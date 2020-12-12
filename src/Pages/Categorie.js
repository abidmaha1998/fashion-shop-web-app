import ComptCat from "../Components/Showcase/CompCat";
import ComptpageCat from "../Components/Showcase/ComptpageCat";
import Navbar from "../Components/Showcase/Navbar";
import NavbarFemme from "../Components/Showcase/NavbarFemme";
const Categorie = () => {
    return ( 
    <>
        <Navbar activeMenu="femme"/>
        <NavbarFemme/>
        <ComptpageCat/>
        
    </>
        );
}
 
export default Categorie;