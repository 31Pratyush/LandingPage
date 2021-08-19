import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormLanding from './FormLanding';
function Landing() {
    return (
        <Container className="landing">
            <Row>
                <Col  className="my-5" sm={8}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h1>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                    <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores voluptates consequatur, excepturi voluptatum eaque nostrum autem iste natus laborum facilis expedita sapiente, ab optio!</p>
                </Col>
                <Col sm={4}><FormLanding/></Col>
            </Row>
        </Container>
    )
} export default Landing;