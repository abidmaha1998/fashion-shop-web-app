import React, {useState} from 'react';
import { Row, Col } from 'antd';
const ComptCat = () => {
    const [categories, setCategories] = useState(["femmes", "pulls", "Chemises", "Accessiores", "chaussures", "femmes", "pulls", "Chemises", "Accessiores", "chaussures", ])
    return ( 
        <>
        <h1>ACHETEZ PAR CATÉGORIE:</h1>
        <Row>
            <Col style={{height:"500px", backgroundSize: "cover",backgroundRepeat: "no-repeat",
            backgroundImage:"url('http://localhost:4000/images/chemise-en-voile-crepe-blanc-casse-femme-ww407_2_fcf1.jpg')",backgroundPosition: "center", border:"1px solid white"}} span={6}>
                 <p style={{color:"white",fontWeight:"bold",textAlign:"right",textShadow:"1px 1px 1px #000000",margin:20,fontSize:"20px"}}>Chemises</p>
            </Col>       
            <Col style={{height:"500px", backgroundSize: "cover",backgroundRepeat: "no-repeat", 
            backgroundImage:"url('http://localhost:4000/images/71-o+ths9SL._AC_UX385_.jpg')",
            backgroundPosition: "center", border:"1px solid white"}} span={6}>
                 <p style={{color:"white",fontWeight:"bold",textAlign:"right",textShadow:"1px 1px 1px #000000",margin:20,fontSize:"20px"}}>Pull</p>
            </Col>
            <Col style={{height:"500px", backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage:"url('http://localhost:4000/images/bijoux-accessoires-femme-montres-cadeau-d-annivers.jpg')",
            backgroundPosition: "center", border:"1px solid white", border:"1px solid white"}} span={12}>
             <p style={{color:"white",fontWeight:"bold",textAlign:"right",textShadow:"1px 1px 1px #000000",margin:20,fontSize:"20px"}}>Accessoires</p>
            </Col>
        </Row>
        <Row>
            <Col 
            style={{height:"500px", backgroundSize: "cover",backgroundRepeat: "no-repeat", 
            backgroundImage:"url('http://localhost:4000/images/robe-femme-longue-impression-manches-longues-robe.jpg')",
            backgroundPosition: "top", border:"1px solid white"}} 
            span={12}>
                 <p style={{color:"white",fontWeight:"bold",textAlign:"right",textShadow:"1px 1px 1px #000000",margin:20,fontSize:"20px"}}>Robes</p>
            </Col>
            <Col style={{padding:"40px", display:"flex", flexDirection:"column", justifyContent:"center", height:"500px", background:"black", border:"1px solid white"}} span={12} >
                <h2 style={{color:"white"}}>Plus de catégories :</h2>
                <div style={{width:"100%",   display: "inline-block"}}>
                    {categories.map(category => <a className="categories-tag" style={{border:"1px solid rgba(255, 255, 255, 0.12)", borderRadius:"15px", padding:"5px", color:"white", 
                    margin:"20px 20px 20px 0", display: "inline-block"}}>{category}</a>)
                }
                </div>
            </Col>
        </Row>

        </>
     );
}
 
export default ComptCat;