import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const LayoutStyles = styled.div`
  background-color: aliceblue;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  );
}
