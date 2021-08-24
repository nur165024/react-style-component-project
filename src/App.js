/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Component/styles/GlobalStyle.style";
// import "./App.css";
import Tutorial from "./Component/Tutorial";

function App() {
  const [color, setColor] = useState({ color: "dark", status: true });

  const colorHandleClick = (color) => {
    // console.log(color);
    setColor({ color: color === false ? "light" : "dark" });
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={color}>
        <Tutorial colorHandleClick={colorHandleClick} />
      </ThemeProvider>
    </>
  );
}

export default App;
