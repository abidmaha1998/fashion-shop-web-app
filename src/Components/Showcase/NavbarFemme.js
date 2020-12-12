import { Button } from 'antd';
import { ShoppingCartOutlined  } from '@ant-design/icons';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const navbarStyle = {
        height: "64px",
        background: "#FFFFFF",
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2)",
      };

    const navbarList = {
        display: "flex",
        justifyContent : "space-between",
        alignItems: "center",
        flexDirection : "row",
        width: "100%",
        height: "100%"

      };

    const navbarListElement = {
        width: "100%",
        textAlign : "center",
      };

    const navbarListLink = {
        fontSize: "1.2rem !important",
        fontWeight: "500",
        color: "black !important"
      };

    return (  
        <nav id="navbar" style={navbarStyle}>
        <div style={navbarList}>
            <div style={navbarListElement}>
            <a className="navbarListLink" href="/Categorie">Chemises</a>
            <a className="navbarListLink" href="/Categorie">Pull</a>
            <a className="navbarListLink" href="/Categorie">Accessoires</a>
            <a className="navbarListLink" href="/Categorie">Robe</a>
            <a className="navbarListLink" href="/Categorie">Nouveautés</a>
            </div>
        </div>
        </nav>
    );
}
 
export default Navbar;