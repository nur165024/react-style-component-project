import styled from "styled-components";

export const Tag = styled.span`
  background: #3b56ec;
  color: #fff;
  font-size: 12px;
  border: 1px solid #3b56ec;
  padding: 10px 15px;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
`;
export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-transform: capitalize;
  margin: 20px 0;
  cursor: pointer;
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${(props) => (props.theme.color === "dark" ? "#fff" : "#000")};
`;
export const Button = styled.div`
  margin-top: 30px;
  & a {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid;
    color: ${(props) => (props.theme.color === "dark" ? "#818181" : "#000")};
    padding: 10px 20px;
    transition: ease-in 0.2s;
    &:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    &:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    &:hover {
      background: #000;
      color: #fff;
      border: 1px dashed #ddd;
    }
  }
`;

export const Image = styled.div`
  position: relative;
  overflow: hidden;
  left: 20px;
  margin-left: 10px;
  & img {
    width: 100%;
  }
`;
