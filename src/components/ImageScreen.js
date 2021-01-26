import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const ImageScreen = ({list}) => {    
    return (
        <Container fluid>
        {list.map((innerList,i) => (
        <Row key = {i} className="justify-content-md-center">
        {innerList.map((v,i) => (
            <Col key={i}  className="lg" style={ {backgroundColor: v === 0 ? 'black' : 'white', padding: "25px", height: "2px"}}>&nbsp;</Col>
        ))}
        </Row>
    ))
        }  
        </Container>
    )
}

export default ImageScreen
