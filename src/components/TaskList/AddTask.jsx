import React from "react";
import { Plus } from "../Header/Header.styled";
import { AddButton, AddContainer } from "./TasksList.styled";

const AddTask = () => {
  return (
    <AddContainer>
      <AddButton>
        <Plus />
        Add new card
      </AddButton>
    </AddContainer>
  );
};

export default AddTask;
