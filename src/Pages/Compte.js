import { useState } from "react";
import CompCommandes from "../Components/Showcase/CompCommandes";
import CompCompteInfo from "../Components/Showcase/CompCompteInfo";
import Navbar from "../Components/Showcase/Navbar";
import { Col, Row, Menu,Table } from 'antd';

const Compte = () => {
    const [showCommandes, setShowCommandes] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    return ( 
        <>
        <Navbar/>
        <Row>
                <Col>
                    <Menu mode="inline" style={{ width: 256 }} defaultSelectedKeys={['1']}>
                        <Menu.Item onClick={() => {setShowCommandes(true);setShowInfo(false)}} key="1">Mes commandes</Menu.Item>
                        <Menu.Item onClick={() => {setShowCommandes(false);setShowInfo(true)}} key="2">Mes informations</Menu.Item>                        
                    </Menu>
                </Col>
                <Col style={{marginLeft:60}}>
                {showCommandes && <CompCommandes/>}
                {showInfo && <CompCompteInfo/>}
                </Col>
            </Row>

        </>
     );
}
 
export default Compte;