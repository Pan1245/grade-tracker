import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/styles.css";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { useLocalStorage } from "react-use";

function GradeTracker() {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand bsPrefix="navbar-title" href=".">
          Grade Tracker
        </Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row className="major-title">
          <Col className="text-center">
            <p className="major-select">Select Your Major</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="button-cs btn-block" variant="outline-dark">
              Computer Science
            </Button>{" "}
            <Button className="button-it btn-block" variant="outline-dark">
              {" "}
              Information Technology
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GradeTracker;

export const Head = () => <title>Grade Tracker</title>;
