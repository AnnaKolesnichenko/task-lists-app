import React from "react";
import {
  Backdrop,
  Modal,
  TaskHead,
  Content,
  Activity,
  Description,
  Editing,
  EditButton,
  Title,
  EditIcon,
  Target,
  Options,
  OptionLi,
  Calendar,
  TagPriority,
  AboutTitle,
  AboutP,
} from "./SignelTask.styled";
//import { Backdrop, Modal } from "./SignelTask.styled";

const SingleTask = () => {
  return (
    <Backdrop>
      <Modal>
        <TaskHead></TaskHead>
        <Content>
          <Description>
            <div style={{ width: "80%" }}>
              <Editing>
                <Title>Task name</Title>
              </Editing>

              <Options>
                <OptionLi>
                  {" "}
                  <div style={{ width: "100px" }}>
                    <span style={{ color: "#7e849b" }}>
                      <Target />
                      Status
                    </span>
                  </div>
                  <p>In progress</p>
                </OptionLi>
                <OptionLi>
                  <div style={{ width: "100px" }}>
                    <span style={{ color: "#7e849b" }}>
                      <Calendar />
                      Due date
                    </span>
                  </div>
                  <p>Wed, 29 April</p>
                </OptionLi>
                <OptionLi>
                  <div style={{ width: "100px" }}>
                    <span style={{ color: "#7e849b" }}>
                      {" "}
                      <TagPriority />
                      Priority
                    </span>
                  </div>
                  <p>Low</p>
                </OptionLi>
              </Options>
              <AboutTitle>Description</AboutTitle>
              <AboutP>
                {" "}
                Task description should be unambiguous, accurate, factful,
                comprehensible, correct and designed.
              </AboutP>
              <AboutP>
                {" "}
                Task description should be unambiguous, accurate, factful,
                comprehensible, correct and designed.
              </AboutP>
            </div>
            <div>
              <EditButton>
                <EditIcon />
                Edit task
              </EditButton>
            </div>
          </Description>
          <Activity>
            <AboutTitle>Activity</AboutTitle>
            <ul>
              <li>
                <p>You created this task</p>
                <span>Mar 5 at 5:10 pm </span>
              </li>
              <li>
                <p>You changed status from To Do to In Porgress</p>
                <span>Mar 7 at 7:25 pm</span>
              </li>
              <li>
                <p>You renamed this task from Task Name 1 to Task Name 2</p>
                <span>Mar 9 at 1:10 pm</span>
              </li>
            </ul>{" "}
          </Activity>
        </Content>
      </Modal>
    </Backdrop>
  );
};

export default SingleTask;
