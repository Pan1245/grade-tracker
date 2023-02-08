import * as React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand bsPrefix="navbar-title" href="../">
          Grade Tracker
        </Navbar.Brand>
      </Navbar>
    </header>
  );
}
