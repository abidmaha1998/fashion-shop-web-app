import { Col, Row, Menu,Table } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const CompCompte = () => {
    const columns = [
        {
          title: 'Réference',
          dataIndex: 'reference',
          width: 150,
        },
        {
          title: 'PrixTotale',
          dataIndex: 'prixTotale',
          width: 150,
        },
        {
          title: 'Etat',
          dataIndex: 'etat',
        },
        {
            title: 'Status',
            dataIndex: 'status',
          },
          {
            title: 'Action',
            dataIndex: 'action',
          },
      ];
      
      const data = [
        {
          key: '1',
          reference: 'John Brown',
          prixTotale: 32,
          etat: '0571-22098909',
          status: 32,
          action: '0571-22098909',
          

        },
    ];
    return (
        <>
            <Row>
                <Col>
                    <Menu mode="inline" style={{ width: 256 }}>
                        <Menu.Item key="1">Mes commandes</Menu.Item>
                        <Menu.Item key="2">Mes informations</Menu.Item>                        
                    </Menu>
                </Col>
                <Col style={{marginLeft:60}}>
                    <h2>Mes commandes</h2>
                    <Table columns={columns} dataSource={data}  />,
                </Col>
            </Row>
        </>
    );
}

export default CompCompte;