import * as React from "react";
import { Container } from "react-bootstrap";
import { useLocalStorage } from "react-use";
import "../components/styles.css";

function GradeTracker() {
  return (
    <Container>
      <h1>Grade Tracker</h1>
      <p>By Siwach Toprasert</p>
    </Container>
  );
}

export default IndexPage;

export const Head = () => <title>Grade Tracker</title>;
