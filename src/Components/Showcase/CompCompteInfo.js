
import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';

const CompCompteInfo = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };


    const Demo = () => {
        const onFinish = (values) => {
            console.log(values);
        };
    }

    return (
        <>
        <div style={{margin:30}}>
            <h2>Mes informations</h2>
            <hr />
            <Form style={{margin:30}}>
                <div style={{margin:30}}>
                <Row>
                    <Col style={{paddingRight:50}}>
                        <Form.Item
                            name={['user', 'nom']}
                            label="  Nom"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                    <Form.Item
                            name={['user', 'prenom']}
                            label="Prénom"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingRight:50}}>
                    <Form.Item
                            name={['user', 'email']}
                            label="Email"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                    <Form.Item
                            name={['user', 'adresse']}
                            label="Adresse"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                <Col>
                        <Form.Item
                            name={['user', 'ville']}
                            label="Ville"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col style={{paddingLeft:70,paddingRight:50}}>
                        <Form.Item
                            name={['user', 'pays']}
                            label="Pays"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                    <Form.Item
                            name={['user', 'codepostale']}
                            label="Code postale"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                </div>

            </Form>
            </div>

        </>
    );
}

export default CompCompteInfo;