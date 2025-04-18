import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h4 className="text-light">Altro da esplorare</h4>
          <Row>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#esplora-generi"
                className="w-100 text-danger text-decoration-none"
              >
                Esplora per genere {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#decenni"
                className="w-100 text-danger text-decoration-none"
              >
                Decenni {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#attivita-e-stati-danimo"
                className="w-100 text-danger text-decoration-none"
              >
                Attività e stati d'animo {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#workout"
                className="w-100 text-danger text-decoration-none"
              >
                Workout {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#classifiche"
                className="w-100 text-danger text-decoration-none"
              >
                Classifiche {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#audio-spaziale"
                className="w-100 text-danger text-decoration-none"
              >
                Audio spaziale {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#video-musicali"
                className="w-100 text-danger text-decoration-none"
              >
                Video musicali {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#nuovi-artisti"
                className="w-100 text-danger text-decoration-none"
              >
                Nuovi artisti {">"}
              </Button>
            </Col>
            <Col xs={12} lg={4} className="mb-3">
              <Button
                variant="secondary"
                href="#sul-del-passato"
                className="w-100 text-danger text-decoration-none"
              >
                ... sul del passato {">"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
