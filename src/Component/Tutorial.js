import React from "react";
import Card from "./Card";
import { Container } from "./styles/Container.style";

const Tutorial = ({ colorHandleClick }) => {
  return (
    <Container>
      <Card colorHandleClick={colorHandleClick}></Card>
    </Container>
  );
};

export default Tutorial;
