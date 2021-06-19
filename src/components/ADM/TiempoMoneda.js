import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Cotizador from '../APIs/Cotizador';
import Clima from '../APIs/Clima';

const TiempoMoneda = () => {
    return (
        <Container>
            <Row>
                <Col xs={4}><Cotizador/></Col>
                <Col><Clima/></Col>
            </Row>
        </Container>
    );
};

export default TiempoMoneda;