import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => (props.theme.color === "dark" ? "#000" : "#fff")};
`;

export const CartContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  background: rgba(73, 73, 73, 0.4);
  padding: 25px 30px;
  border-radius: 5px;
  overflow: hidden;
`;
