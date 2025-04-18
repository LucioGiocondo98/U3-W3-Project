import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const NuoviEpisodiRadio = () => {
  return (
    <div>
      <Container fluid className="py-4">
        <h4 className="text-light">Nuovi Episodi radio</h4>

        <Row>
          <Col xs={4} md={4} lg={2} className="mb-4">
            <Card className="h-100 bg-dark text-white">
              <Card.Img variant="top" src="/assets/2a.png" />
              <Card.Body>
                <Card.Text>Prologo con Abuelo</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4} lg={2} className="mb-4">
            <Card className="h-100 bg-dark text-white">
              <Card.Img variant="top" src="/assets/2b.png" />
              <Card.Body>
                <Card.Text>The Wander</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4} lg={2} className="mb-4">
            <Card className="h-100 bg-dark text-white">
              <Card.Img variant="top" src="/assets/2c.png" />
              <Card.Body>
                <Card.Text>Michael Bublè</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4} lg={2} className="mb-4 d-none d-lg-block">
            <Card className="h-100 bg-dark text-white">
              <Card.Img variant="top" src="/assets/2d.png" />
              <Card.Body>
                <Card.Text>Stephan Moccio</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4} lg={2} className="mb-4 d-none d-lg-block">
            <Card className="h-100 bg-dark text-white">
              <Card.Img variant="top" src="/assets/2e.png" />
              <Card.Body>
                <Card.Text>Chart Spotlight</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NuoviEpisodiRadio;
