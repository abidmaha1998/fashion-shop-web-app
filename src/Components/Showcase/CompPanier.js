import React from 'react';
import { Row, Col, Radio, Button } from 'antd';
const CompPanier = () => {
    const ButtonStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        
      };
    return (
        <>
            <Row style={{
                display: "flex",
                flexWrap: "wrap",
                flex: "1 1 auto",
                margin:70
            }}
            >
                <Col style={{flex:"0 0 66.6666666667%",maxWidth:"66.6666666667%" }}>
                    <Row style={{display: "flex",flexWrap: "wrap",flex: "1 1 auto",marginRight: "-12px",marginLeft: "-12px"}}>
                        <Col style={{ flex:"0 0 33.3333333333%",maxWidth:"33.3333333333%"  }}>
                            <div style={{padding: "30px",
                                height: "300px", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                                backgroundImage: "url('http://localhost:4000/images/chemise-en-voile-crepe-blanc-casse-femme-ww407_2_fcf1.jpg')",
                                backgroundPosition: "center", border: "1px solid white"
                            }}> </div>
                        </Col>

                        <Col style={{padding: "30px",flex:"0 0 66.6666666667%",maxWidth:"66.6666666667%" }}>
                             <h1>chemises-femme-2</h1>
                             <p>Prix : 145 €<br />
                            Couleur : vert<br />
                            Taille : s<br />
                            Quanité : 1<br />
                            Prix totale : 145.00 €
                            </p>
                        </Col>
                    </Row>
                            <hr/>
                </Col>

                <Col style={{ padding: "30px",flex:"0 0 33.3333333333%",maxWidth:"33.3333333333%"}}>
                    <h1>Aperçu</h1>
                    <div>
                        <h2>
                            Prix totale : 145.00 €<br />
                            Quanité : 1
                </h2>

                    </div>

                    <div>
                        <Button style={{ marginTop: 30,border: "2px solid black" }}>
                            <a href="/validatecommand">
                            VALIDER LA COMMANDE
                            </a>
                            </Button>
                    </div>
                    <div style={{}}>
                        <Button style={{ paddingRight:50,paddingLeft:50,marginTop: 30,border: "2px solid black" }}>VIDER PANIER</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default CompPanier;