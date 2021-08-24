/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from "../image/illustration.png";
import { CartContainer } from "./styles/Container.style";
import { Button, H1, Image, Tag, Text } from "./styles/Elements.style";
import { TitleStyle } from "./styles/StyleComponent.style";

const Card = ({ colorHandleClick }) => {
  return (
    <CartContainer>
      <div>
        <Tag onClick={(e) => colorHandleClick(!e)}>Light Mode</Tag> &nbsp;
        <Tag onClick={(e) => colorHandleClick(e)}>Dark Mode</Tag>
        <H1>
          <TitleStyle text="react style component" />
        </H1>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cumque maiores vero placeat, dolores enim excepturi distinctio debitis
          quae ducimus nostrum quo at, sequi tempora soluta fuga vel! Eos,
          dolore!
        </Text>
        <Button>
          <a href="#">Watch now</a>
          <a href="#">Github repo</a>
        </Button>
      </div>
      <Image>
        <img src={image} alt="" />
      </Image>
    </CartContainer>
  );
};

export default Card;
