import React from "react";
import {
  Button,
  ButtonList,
  HeaderContainer,
  MainTitle,
  Plus,
  Reload,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <MainTitle>my task board</MainTitle>
      <ButtonList>
        <li>
          <Button backgroundColor="white" color="#5d6481">
            <Reload />
            History
          </Button>
        </li>
        <li>
          <Button backgroundColor="#5d6481" color="white">
            <Plus />
            create task list
          </Button>
        </li>
      </ButtonList>
    </HeaderContainer>
  );
};

export default Header;
