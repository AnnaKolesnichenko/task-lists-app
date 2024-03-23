import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";

const Task = () => {
  return (
    <div>
      <h2>Task name</h2>
      <p>
        Task description should be unambiguous, accurate, factful,
        comprehensible, correct and designed.
      </p>
      <div>
        <CiCalendar />
        <h3>Wed, 19 Apr</h3>
      </div>
      <div>
        <GoDotFill />
        <span>Medium</span>
        <button>
          move to
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default Task;
