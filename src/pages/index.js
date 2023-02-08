import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles.css";
import Layout from "../components/layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "gatsby";

export const Head = () => <title>Grade Tracker</title>;

function GradeTracker() {
  return (
    <Layout>
      <Container fluid>
        <Row className="major-title">
          <Col className="text-center">
            <p className="major-select">Select Your Major</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button
              className="btn-cs btn-block"
              href="/cs"
              variant="outline-dark"
            >
              Computer Science
            </Button>{" "}
            <Button
              className="btn-it btn-block"
              href="/it"
              variant="outline-dark"
            >
              {" "}
              Information Technology
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default GradeTracker;
