
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Header, Row, Col } from 'antd';
import {DesktopOutlined, PieChartOutlined,} from '@ant-design/icons';
const CompAdmin = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <>

    
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ backgroundColor: "black" }}>
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
      </Layout>
      <Layout className="site-layout"></Layout>
    </>
    );
}

export default CompAdmin;