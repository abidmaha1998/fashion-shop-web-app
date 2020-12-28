
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Input, Row, Col, Button, Table } from 'antd';
import {
    DesktopOutlined, PieChartOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
const CompadminCategorie = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const onSearch = value => console.log(value);
    const renderContent = (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === 4) {
            obj.props.colSpan = 0;
        }
        return obj;
    };

    const columns = [

        { title: 'Nom', dataIndex: 'nom', render: renderContent },
        { title: 'Parent', dataIndex: 'parent', render: renderContent },
        { title: 'Actions', dataIndex: 'actions', render: renderContent, },

    ];

    const data = [
        {
            key: '1',
            nom: 'Abid',
            parent: 'Maha',
            actions: 'OK'

        },
    ];
    return (
        <>


            <Layout style={{ minHeight: '100vh' }}>
                <Sider style={{ backgroundColor: "black" }}>
                    <div className="logo" />
                    <div>
                        <h2 style={{ color: "white", padding: 20 }}> Fashion Store</h2>
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

                            <h3>  Site Web</h3>
                            <hr/>
                            <Row>

                                <Col><h2>Les Categories</h2></Col>
                                <Col style={{ marginLeft: 800 }}><Button type="primary" block>Ajouter</Button>
                                </Col>

                            </Row>
                            <Row style={{ marginTop: 30 }}>
                                <Table columns={columns} dataSource={data} bordered />
                            </Row>
                        </div>

                    </Content>

                </Layout>
            </Layout>


        </>);
}
export default CompadminCategorie;