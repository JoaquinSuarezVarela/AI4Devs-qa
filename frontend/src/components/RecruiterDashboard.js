import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/lti-logo.png'; // Ruta actualizada para importar desde src/assets

const RecruiterDashboard = () => {
    return (
        <Container className="mt-5">
            <div className="text-center" data-cy="logo-container"> {/* Contenedor para el logo */}
                <img src={logo} alt="LTI Logo" style={{ width: '150px' }} data-cy="logo" />
            </div>
            <h1 data-cy="position-title">Position</h1>
            <Row className="mt-4">
                <Col>
                    <Card data-cy="add-candidate-card">
                        <Card.Body>
                            <Card.Title data-cy="add-candidate-title">Añadir Candidato</Card.Title>
                            <Button variant="primary" data-cy="add-candidate-button">Añadir Nuevo Candidato</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card data-cy="view-positions-card">
                        <Card.Body>
                            <Card.Title data-cy="view-positions-title">Ver posiciones</Card.Title>
                            <Button variant="primary" data-cy="view-positions-button">Ir a Posiciones</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecruiterDashboard;