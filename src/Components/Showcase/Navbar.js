import React, { useState } from 'react';
import { ShoppingCartOutlined, AlignRightOutlined  } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import { Drawer,Layout, Button,PageHeader } from 'antd';
import Panier from '../../Pages/Panier';

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const { Header} = Layout;


  const onClose = () => {
    setVisible(false);
  };

    const navbarStyle = {
        // height: "64px",
        // background: "#FFFFFF",
        // boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2)",
        
      };

    const navbarList = {
        
        justifyContent : "space-between",
        alignItems: "center",
        overflow: "hidden", 
        
        // flexDirection : "row",
        // width: "100%",
        // height: "100%",
        
      };
      
    const navbarListElement = {
      float: "left",
      display: "block",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none",
      
      // width: "100%",
      // textAlign : "center",
    };
    // const buttonMobile = {
    //   '@media (max-width: 768px)' : {
    //     display: "none"
    //   }
    // };
    
  
    return (  
      <>
        <header style={{display: "inline"}}>
        <nav id="navbar" style={navbarStyle}>
          <div style={navbarList}>
              <div style={navbarListElement}><a href="/" className="logo"><img src={logo} alt="Logo" /></a></div>
              <div style={navbarListElement }>
                <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "femme")  ? "#f5f5f5" : "#fff"}} href="/femme">Femme</a>
                <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "homme") ? "#f5f5f5" : "#fff"}} href="/homme">Homme</a>
                <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "enfant")  ? "#f5f5f5" : "#fff"}} href="/enfant">Enfant</a>
              </div>
              <div style={navbarListElement}>
                  <a className="navbarListLink" href="/Compte">Mon Compte</a>
                  <a className="navbarListLink" href="/Panier" ><ShoppingCartOutlined /></a>
                  <AlignRightOutlined onClick={showDrawer}/>
                  <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                  >
                    <div>
                      <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "femme")  ? "#f5f5f5" : "#fff"}} href="/femme">Femme</a>
                      <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "homme") ? "#f5f5f5" : "#fff"}} href="/homme">Homme</a>
                      <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "enfant")  ? "#f5f5f5" : "#fff"}} href="/enfant">Enfant</a>
                    </div>
                  </Drawer>
              </div>
          </div>
        </nav>
        </header>
        
        </>
    );
}
 
export default Navbar;