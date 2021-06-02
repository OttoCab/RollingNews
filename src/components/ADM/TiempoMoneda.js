import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import Cotizador from './Cotizador';
import Clima from './Clima';

const TiempoMoneda = () => {
    return (
        <Container>
            <Row>
                <Col><Cotizador></Cotizador></Col>
                <Col><Clima></Clima></Col>
            </Row>
        </Container>
    );
};

export default TiempoMoneda;