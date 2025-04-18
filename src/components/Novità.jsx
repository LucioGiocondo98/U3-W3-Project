import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Novità = () => {
  return (
    <div>
      <h2 className="text-light">Novità</h2>
      <Container fluid className="bg-dark text-white py-4">
        <Row>
          <Col xs={6} className="mb-3 mb-md-0">
            <Card className="bg-secondary text-white">
              <Card.Img variant="top" src="/assets/1b.png" />
            </Card>
          </Col>
          <Col xs={6}>
            <Card className="bg-secondary text-white">
              <Card.Img variant="top" src="/assets/1a.png" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Novità;
