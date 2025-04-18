import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

const MyNavbar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ padding: "0.75rem 1rem", position: "relative" }}
      >
        <Container
          fluid
          className="px-0 d-flex justify-content-between align-items-center"
        >
          <Navbar.Toggle aria-controls="navbar-nav" className="d-lg-none" />

          <Navbar.Brand
            className="position-absolute start-50 translate-middle-x d-flex align-items-center gap-1"
            style={{ color: "white", fontWeight: "500", fontSize: "1.2rem" }}
          >
            <i className="bi bi-apple" style={{ fontSize: "1.2rem" }}></i>
            <span className="d-block d-sm-none">Music</span>
          </Navbar.Brand>

          <Nav className="ms-auto d-flex align-items-center gap-3">
            <i className="bi bi-volume-up text-white d-none d-lg-block"></i>
            <Button variant="danger" size="sm" className="d-none d-md-block">
              <i className="bi bi-person me-1"></i>Accedi
            </Button>
          </Nav>

          <div className="d-block d-md-none">
            <h4 className="text-danger fw-bold mb-0">Accedi</h4>
          </div>
        </Container>

        <Navbar.Collapse id="navbar-nav"></Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
