import React from "react";
import { StyledContainer, StyledContent, Title } from "../../UI";
import Account from "../Account";
import List from "../List";

const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
        <List />
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
