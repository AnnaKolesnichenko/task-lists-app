import styled from "styled-components";
import { IoReloadSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
`;

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 12px 27px;
  text-transform: capitalize;
  border: 0.2px solid #868eaa;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || "#5d6481"};
  color: ${(props) => props.color || "white"};
`;

export const Reload = styled(IoReloadSharp)`
  width: 24px;
  height: 24px;
  transform: scaleX(-1);
`;

export const Plus = styled(GoPlus)`
  width: 24px;
  height: 24px;
`;
