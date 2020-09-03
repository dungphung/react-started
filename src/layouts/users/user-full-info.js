import React from "react";
import styled from "styled-components";
import { Avatar, Star } from "../../components";

const Container = styled.div`
  display: flex !important;
  flex-direction: row !important;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  min-width: 50px;
  margin-left: ${(props) => `${props?.marginLeft}px` ?? 0};
`;

const UserFullInfo = ({ cus_name, starArray, cus_email }) => {
  return (
    <Container>
      <Column>
        <Avatar
          size={60}
          src="https://www.w3schools.com/howto/img_avatar.png"
        />

        <Star starArray={starArray} />
      </Column>

      <Column marginLeft={20}>
        <h3>{cus_name}</h3>
        <h5>{cus_email}</h5>
      </Column>
    </Container>
  );
};

UserFullInfo.defaultProps = {
  starArray: ["", "", "", "", ""],
};

export default UserFullInfo;
