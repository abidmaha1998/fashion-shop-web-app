import React, {useState} from 'react';
import { Row, Col } from 'antd';
const ComptpageCat = () => {
    return ( 
        <>
        <p style={{fontSize:15,fontWeight:"bold",marginLeft:10}}>
        Produits/ Femmes/ Chemises</p>
        <Row style={{margin:40}}>
            <Col span={12} >
                <h3>FILTER</h3>
                <div>
                </div>
            
            </Col>
            <Col style={{margin:10,border:"2px solid #f5f5f5",padding:"10px"}} span={12} >
                <h3>Trier par:</h3>
                <h3>Trier par:</h3>
                <h3>Trier par:</h3>
                <div>
                </div>
            </Col>
            <Col style={{margin:10,border:"1px solid #f5f5f5",padding:"10px"}} span={12} >
                <h3>Trier par:</h3>
                <h3>Trier par:</h3>
                <h3>Trier par:</h3>
                <div>
                </div>
            </Col>
            <Col style={{margin:10,border:"1px solid #f5f5f5",padding:"10px"}} span={12} >
                <h3>Trier par:</h3>
                <h3>Trier par:</h3>
                <h3>Trier par:</h3>
                <div>
                </div>
            </Col>
        </Row>

        <Row style={{margin:40,padding:"10px",backgroundColor:"red"}}>
            <Col span={12} >
                <h3>FILTER</h3>
                
            
            </Col>
            <Col>
            <h3>Trier par:</h3>                  
            </Col>
            </Row>
      
        </>
     );
}
 
export default ComptpageCat;