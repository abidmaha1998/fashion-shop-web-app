import React from 'react';
import { Row, Col,Radio, Slider, Button} from 'antd';
import Home_Enfant from '../../assets/Home_Enfant.jpg';
import Home_Femme from '../../assets/Home_Femme.jpg';
import Home_Homme from '../../assets/Home_Homme.jpg';

const ComptpageCategorie= () => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        
      };

  return ( 
    <>
    <p> Produits/Femmes/Chemises</p>
    <Row style={{
    display: "flex",
    flexWrap:"wrap",
    flex: "1 1 auto",
    marginRight: "-12px",
    marginLeft: "-12px"
    }}
    >
        <Col style={{padding:"30px",flex: "0 0 25%",maxWidth: "25%"}}> 
        <h2 class="filter">FILTER</h2>
        <div style={{border:"1px solid #f5f5f5",padding:"10px"}}>
            <h3>TRIER PAR</h3>
            <Radio.Group>
            <Radio style={radioStyle} value={1}>Le plus nouveaux</Radio>
            <Radio style={radioStyle} value={2}>Le plus anciens</Radio>
            <Radio style={radioStyle} value={3}>Prix Croissant</Radio>
            <Radio style={radioStyle} value={4}>Prix Decroissant</Radio>
            </Radio.Group>
        </div>
        <div style={{border:"1px solid #f5f5f5",padding:"10px"}}>
            <h3>COULEURS</h3>
            <Radio.Group>
            <Radio style={radioStyle} value={1}>Rouge</Radio>
            <Radio style={radioStyle} value={2}>Vert</Radio>
            <Radio style={radioStyle} value={3}>Noir</Radio>
            <Radio style={radioStyle} value={4}>Blanc</Radio>
            </Radio.Group>
        </div>
        <div style={{border:"1px solid #f5f5f5",padding:"10px"}}>
            <h3>Trier par</h3>          
            
            </div>
        <div style={{border:"1px solid #f5f5f5",padding:"10px"}}>
            <h3>Trier par</h3>
            <Radio.Group>
            <Radio style={radioStyle} value={1}>S</Radio>
            <Radio style={radioStyle} value={2}>M</Radio>
            <Radio style={radioStyle} value={3}>L</Radio>
            <Radio style={radioStyle} value={4}>XL</Radio>
            </Radio.Group>
        </div>
        <div>
        <h3>PRIX</h3>
        <Slider defaultValue={30}  />
        </div>
        </Col>

        <Col style={{padding:"30px",flex: "0 0 75%",maxWidth: "75%"}}>
        <h2>CHEMISES</h2>
        

        
        <Row>
            <Col span={8}>
            <a href="/SeulItem" >
                <div style={{height:"500px", backgroundSize: "cover",backgroundRepeat: "no-repeat",
            backgroundImage:"url('http://localhost:4000/images/chemise-en-voile-crepe-blanc-casse-femme-ww407_2_fcf1.jpg')",
            backgroundPosition: "center", border:"1px solid white"}}> 
            </div>
            </a>
                <div style={{fontSize:20}}>
                <p>chemises-femme-2<br/>
                 Titre : chemise-1-femme<br/>
                 Prix : 145.00 €<br/>
                 couleurs : vert rouge<br/>
                 sizes : s m<br/>
                 Etat:<span style={{color:"green"}}>En stock</span>
                 </p>
                 <Button>VOIR LES DETAILS</Button>
                 </div>
            </Col> 


             <Col span={8}>
            <a href="#" >
                <div  style={{height:"500px", backgroundSize: "cover",backgroundRepeat: "no-repeat", 
            backgroundImage:"url('http://localhost:4000/images/chemise-femme_(2).jpg')",
            backgroundPosition: "center", border:"1px solid white"}}> </div>
            </a>
                 <div>
                 <p style={{fontSize:20}}>chemises-femme-2<br/>
                 Titre : chemise-1-femme<br/>
                 Prix : 145.00 €<br/>
                 couleurs : vert rouge<br/>
                 sizes : s m<br/>
                 Etat:
                 <span style={{color:"green"}}>En stock</span>
                 </p>
                 <Button>VOIR LES DETAILS</Button>
                 </div>
            </Col>
            
        </Row>    
        </Col>
        
      
    </Row>
    
    
    </>


   );
   
}
export default ComptpageCategorie;


