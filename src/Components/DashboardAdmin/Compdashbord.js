
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Header, Row, Col } from 'antd';
import {  DesktopOutlined, PieChartOutlined,
} from '@ant-design/icons';
const Compdashbord = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <>

    
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ backgroundColor: "black" }}>
          <div className="logo" />
          <div>
          <h2 style={{ color: "white", padding:20}}> Fashion Store</h2>
        <hr />
          </div>
          <Menu style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined style={{ color: "white" }} />}>
              Tableau de bord
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined style={{ color: "white" }} />}>
              Produits
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
              Commandes
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              Categories
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* <h3> Mon Compte</h3>
            <h3> Site Web</h3> */}
            <h3>  Tableau de bord </h3>
            <hr/>
            <Row>

            <Col>
            <div style={{backgroundColor:"black",height:"250px",width:"550px",marginRight:30}}>
              <h1 style={{color:"white",textAlign:"center",paddingTop:"100px",fontSize:"30px"}}> Produits</h1>
            </div>
            </Col>
            <Col>
            <div style={{backgroundColor:"black",height:"250px",width:"550px"}}>
              <h1 style={{color:"white",textAlign:"center",paddingTop:"100px",fontSize:"30px"}}> Commandes</h1>
            </div>
            </Col>
            <Col>
            <div style={{backgroundColor:"black",height:"250px",width:"550px"}}>
              <h1 style={{color:"white",textAlign:"center",paddingTop:"100px",fontSize:"30px",marginTop:40}}> Categories</h1>
            </div>
            </Col>
            </Row>
            
            
            
            </div>
            
          </Content>
          
        </Layout>
      </Layout>
      

    </>);
}



export default Compdashbord;