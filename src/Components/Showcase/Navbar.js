import React, { useState } from 'react';
import { ShoppingCartOutlined, AlignRightOutlined  } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import { Drawer, Button } from 'antd';

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
        height: "100%",
      };
    const navbarListMobile = {
        display: "none",
        justifyContent : "flex-start",
        alignItems: "flex-start",
        flexDirection : "column",
        width: "100%",
        height: "100%",
        '@media (max-width: 768px)' : {
          display: "flex"
        }
      };
    const navbarListElement = {
      width: "100%",
      textAlign : "center",
    };
    const buttonMobile = {
      '@media (max-width: 768px)' : {
        display: "none"
      }
    };
    const navbarListResponsive = {
      '@media (max-width: 768px)' : {
        display: "none"
      }
    };
    return (  
        <nav id="navbar" style={navbarStyle}>
          <div style={navbarList}>
              <div style={navbarListElement}><a href="/" className="navbarListLink"><img src={logo} alt="Logo" /></a></div>
              <div style={navbarListElement, navbarListResponsive }>
                <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "femme")  ? "#f5f5f5" : "#fff"}} href="/femme">Femme</a>
                <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "homme") ? "#f5f5f5" : "#fff"}} href="/homme">Homme</a>
                <a className="navbarListLink" style={{backgroundColor: (props.activeMenu === "enfant")  ? "#f5f5f5" : "#fff"}} href="/enfant">Enfant</a>
              </div>
              <div style={navbarListElement}>
                  <a className="navbarListLink" href="#">Mon Compte</a>
                  <a className="navbarListLink" href="#" style={buttonMobile}><ShoppingCartOutlined /></a>
                  <AlignRightOutlined onClick={showDrawer}/>
                  <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                  >
                    <div>
                      <a className="navbarListLinkMobile" style={{backgroundColor: (props.activeMenu === "femme")  ? "#f5f5f5" : "#fff"}} href="/femme">Femme</a>
                      <a className="navbarListLinkMobile" style={{backgroundColor: (props.activeMenu === "homme") ? "#f5f5f5" : "#fff"}} href="/homme">Homme</a>
                      <a className="navbarListLinkMobile" style={{backgroundColor: (props.activeMenu === "enfant")  ? "#f5f5f5" : "#fff"}} href="/enfant">Enfant</a>
                    </div>
                  </Drawer>
              </div>
          </div>
        </nav>
    );
}
 
export default Navbar;
