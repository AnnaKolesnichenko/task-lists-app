import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { GoTag } from "react-icons/go";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  opacity: 1;
  background: #cccccc;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

export const Modal = styled.div`
  position: absolute;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */

  display: flex;
  flex-direction: column;
  width: 70%;
  box-sizing: border-box;
  border-radius: 10px;

  z-index: 100;
  background: #fff;
  //transition: opacity 250ms ease-in-out;
`;

export const TaskHead = styled.div`
  width: 100%;
  height: 40px;
  background-color: #5d6481;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: space-between;
`;

export const Editing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-size: 26px;
  font-family: "Montserrat", sans-serif;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 30px;
  padding: 5px 7px;
  font-family: "Montserrat", sans-serif;
  border: 0.5px solid #edeff7;
  background-color: white;
`;

export const EditIcon = styled(FaRegEdit)`
  width: 15px;
  height: 15px;
  fill: #7e849b;
`;

export const Options = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const OptionLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

export const Target = styled(TfiTarget)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  fill: #7e849b;
`;

export const Calendar = styled(CiCalendar)`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  fill: #7e849b;
`;

export const TagPriority = styled(GoTag)`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  fill: #7e849b;
`;

export const Activity = styled.div`
  background-color: #f3f4f6;
  padding: 20px 30px;
`;

export const AboutTitle = styled.h2`
  margin: 0;
  margin-top: 25px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

export const AboutP = styled.p`
  font-size: 14px;
  color: #7e849b;
`;
