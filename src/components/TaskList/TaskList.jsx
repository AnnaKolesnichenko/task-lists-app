import React from "react";
import { items } from "./data";
import {
  List,
  Menu,
  TaskAmount,
  TaskItem,
  TaskInfo,
  TaskName,
  TasksContainer,
} from "./TasksList.styled";
import AddTask from "./AddTask";
import Task from "../TaskItem/Task";
import SingleTask from "../TaskItem/SingleTask";

const TaskList = () => {
  return (
    <TasksContainer>
      <List>
        {items.map((item) => (
          <TaskItem>
            <TaskInfo>
              <div>
                <TaskName>{item.title}</TaskName>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TaskAmount>{item.quantity}</TaskAmount>
                <Menu />
              </div>{" "}
            </TaskInfo>{" "}
            <AddTask />
          </TaskItem>
        ))}
      </List>
      <Task />
      <SingleTask />
    </TasksContainer>
  );
};

export default TaskList;
