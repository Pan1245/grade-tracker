import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  padding: 1rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <footer>Created by Siwach Toprasert, 6316801</footer>
    </FooterStyles>
  );
}
