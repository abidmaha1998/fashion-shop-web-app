import shopImage from '../../assets/shopImage.jpg';
import { Button } from 'antd';
const CompImg = () => {
    const stylebtn = { marginBottom: "30px", marginLeft: "60px", 
    border: "thin solid currentColor", backgroundColor: "transparent", 
    box_shadow: "1px 1px 1px #000000",
    }
    return (
        <div style={{ height: "500px", overflow: "hidden", position: "relative" }}>
            <img style={{ width: "100%", position: "absolute", zIndex: "-1" }} src={shopImage} />
            <p style={{ color: "White", fontWeight: "bold", fontSize: "25px", paddingTop: "170px", marginBottom: "0",paddingLeft:30 }}> Les meilleurs produits du marché</p>
            <p style={{ color: "White", fontSize: "20px", paddingLeft:30}}>Découvrez nos selections signé par les meilleurs designers.</p>
            <Button style={stylebtn}>COLLECTION D'ETE</Button>
            <br />
            <Button style={stylebtn}>VOIR NOS OFFRES</Button>
        </div>
    );
}

export default CompImg;