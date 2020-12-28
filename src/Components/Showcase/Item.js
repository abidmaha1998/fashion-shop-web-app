import { Row, Col,Select,InputNumber,Button} from 'antd';
const Item = () => {
    const { Option } = Select;
    return ( 
        <>
        <Row style={{
    display: "flex",
    flexWrap:"wrap",
    flex: "1 1 auto",
    marginRight: "-12px",
    marginLeft: "-12px"
    }}
    >
        <Col style={{padding:"30px",flex: "0 0 50%",maxWidth: "50%"}}> 
        <div  style={{height:"500px", backgroundSize: "cover",backgroundRepeat: "no-repeat", 
            backgroundImage:"url('http://localhost:4000/images/chemise-en-voile-crepe-blanc-casse-femme-ww407_2_fcf1.jpg')",
            backgroundPosition: "center", border:"1px solid white"}}> </div>
        </Col>
        <Col style={{padding:"30px",flex: "0 0 50%",maxWidth: "50%"}}>
        <h2>Titre : chemises-femme-2</h2>
        <div>
            <h3>Price :145 €</h3>
            <div style={{padding:"0px",flex: "0 0 70%",maxWidth: "70%"}}>
            Description :
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur 
            quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto 
            cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi 
            velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at 
            voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam 
            laboriosam? Dolores.
            </div>
        </div>
        <div>
        <Select defaultValue="Vert" style={{ width: 120,marginBottom:30 ,marginTop:20}}>
        <Option value="vert">Vert</Option>
        <Option value="rouge">Rouge</Option>
        <Option value="noir">Nooir</Option>
        </Select>
        </div>
        <div>
        <Select defaultValue="S" style={{ width: 120,}}>
        <Option value="s">S</Option>
        <Option value="m">M</Option>
        <Option value="l">L</Option>
        </Select>
        </div>
        <div>
            <h3> Quantité:</h3>
            <InputNumber min={1} max={10} defaultValue={1}  />

        </div>
        <div>
            <a href="/validatecommande">
        <Button style={{marginTop:30}}>AJOUTER AU PANIER</Button>
        </a>
        </div>
        </Col>
        </Row>
        </>
     );
}
 
export default Item;