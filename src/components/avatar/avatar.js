import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";

const ImageCustom = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
`;

const CustomAvatar = ({ size, src, ...rest }) => {
  return (
    <ImageCustom {...rest}>
      <Avatar
        style={{ backgroundColor: "red", verticalAlign: "middle" }}
        size={size}
        src={src}
      />
    </ImageCustom>
  );
};

export default CustomAvatar;
