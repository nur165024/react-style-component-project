import styled from "styled-components";
import Title from "../Title";

export const TitleStyle = styled(Title)`
  color: ${(props) => (props.theme.color === "dark" ? "#ddd" : "#000")};
  &:hover {
    color: red;
  }
`;
