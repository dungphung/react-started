import React from "react";
import styled from "styled-components";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

const renderStarPoint = (starArray) => {
  const res = [];
  const arrayLength = starArray.length;
  for (let i = 0; i < arrayLength; i++) {
    if (starArray[i] === "isHalf") {
      res.push(<StarTwoTone key={i} />);
    } else if (starArray[i] === "isFull") {
      res.push(<StarFilled key={i} />);
    } else {
      res.push(<StarOutlined key={i} />);
    }
  }
  return res;
};

const Container = styled.span`
  color: #f8e60b !important;
  display: block;
  padding: 0 3px;
`;

const StarContainer = ({ size, starArray }) => {
  const res = renderStarPoint(starArray);
  return <Container size={size}>{res}</Container>;
};

export default StarContainer;
