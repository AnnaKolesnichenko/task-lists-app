import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

export const TasksContainer = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TaskItem = styled.li`
  width: calc((100% - 60px) / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const TaskInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #868eaa;
  border-top: 1px solid #868eaa;
`;

export const TaskName = styled.h2`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
`;

export const TaskAmount = styled.span`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
`;

export const Menu = styled(BsThreeDotsVertical)`
  width: 24px;
  height: 24px;
`;

export const AddContainer = styled.div`
  width: 100%;
`;

export const AddButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  background-color: white;
  border: 1px dashed #868eaa;
  border-radius: 5px;
`;
