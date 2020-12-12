import React from 'react';
import { Row, Col } from 'antd';
import Home_Enfant from '../../assets/Home_Enfant.jpg';
import Home_Femme from '../../assets/Home_Femme.jpg';
import Home_Homme from '../../assets/Home_Homme.jpg';

const GridHome = () => {
  return ( 
    <>
    <Row style={{marginTop:'50px'}} justify="center">
    <Col backgroundPosition= "center top" style={{padding:"0 50px"}} xs={{ span:24 }} md={{ span: 8 }} lg={{ span: 8 }}>
    <a href="/femme"><div style={{height:"600px",background: 'url("https://i.pinimg.com/736x/f6/f1/12/f6f1120a061fbae237861f5fbd5fc437.jpg")', backgroundPosition: "center top"}}>
    </div></a>
    </Col>
    <Col backgroundPosition= "center top" style={{padding:"0 50px"}} xs={{ span:24 }} md={{ span: 8 }} lg={{ span: 8 }}>
    <a href="#"><div style={{height:"600px",background: 'url("https://i.pinimg.com/originals/aa/3c/c9/aa3cc90ef6b77fd06f81a7b0416e9c47.jpg")', backgroundPosition: "center top"}}>
    </div></a>
    </Col>   
    <Col backgroundPosition= "center top" style={{padding:"0 50px"}} xs={{ span:24 }} md={{ span: 8 }} lg={{ span: 8 }}>
    <a href="#" ><div style={{height:"600px",background: 'url("https://i.pinimg.com/originals/56/15/71/5615717719d205d14b6d4d6f77a2aeb1.jpg")', backgroundPosition: "center top"}}>
    </div></a>
    </Col>
  </Row>,
    </>


   );
   
}
export default GridHome;


