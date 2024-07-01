import React from "react";

import styles from './TasksList.module.css';

const TaskList = ({ task }) => {
  return (
    <li className={styles['task--list']}>
      <p>{task}</p>
    </li>
  )
};

export default TaskList;