import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AppleFooter() {
  const links = [
    "Condizioni dei servizi internet",
    "Apple Music e privacy",
    "Avviso sui cookie",
    "Supporto",
    "Feedback",
  ];

  return (
    <footer
      className="bg-secondary text-light py-4"
      style={{ fontSize: "0.8rem" }}
    >
      <Container>
        <Row className="mb-3">
          <Col className="d-flex flex-wrap gap-3">
            <a href="#" className="text-light text-decoration-none">
              Italia
            </a>
            <a href="#" className="text-light text-decoration-none">
              English (UK)
            </a>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>Copyright © 2024 Apple Inc. Tutti i diritti riservati.</Col>
        </Row>

        <Row>
          <Col className="d-flex flex-wrap gap-3">
            {links.map((text, index) => (
              <a
                key={index}
                href="#"
                className="text-light text-decoration-none"
                style={{
                  borderRight:
                    index !== links.length - 1 ? "1px solid #ccc" : "none",
                  paddingRight: index !== links.length - 1 ? "10px" : "0",
                }}
              >
                {text}
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AppleFooter;
