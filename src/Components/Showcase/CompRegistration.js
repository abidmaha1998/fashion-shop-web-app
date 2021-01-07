
import React from 'react';
import 'antd/dist/antd.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';



import { Form, Input, InputNumber, Button,Checkbox } from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const ComRegistration = () => {
   const onFinish = (values) => {
      console.log(values);
    }
    
    return (
        <>
        <div style={{}}>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Nom"
        rules={[
          {
            required: true,
          },
        ]}
      >        
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'name']}
        label="Prénom"
        rules={[
          {
            required: true,
          },
        ]}
      >        
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'name']}
        label="Adresse"
        rules={[
          {
            
          },
        ]}
      >        
        <Input />
      </Form.Item>
      
      <Form.Item
        name={['user', 'age']}
        label="Ville"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >         
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Pays"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >         
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Code Postale"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >         
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Password">
      <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    
      </Form.Item>    
     
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Accepter vous?</Checkbox>
        </Form.Item> 

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Enregistrer
        </Button>
      </Form.Item>
    </Form>   
    </div>
        </>
    );
}

export default ComRegistration;