import React from "react";

import TaskList from "./TaskList";
import Card from "../UI/Card";

import styles from "./Task.module.css";

const Task = ({ isLoading, isError, tasks, onFetch }) => {
  let taskContent = (
    <p className={styles["p-text"]}>
      No tasks found. Start adding some
    </p>
  );

  if (tasks.length > 0) {
    taskContent = (
      <ul>
        {tasks.map((taskItems) => (
          <TaskList key={taskItems.id} task={taskItems.task} />
        ))}
      </ul>
    );
  }

  let content = taskContent;

  if (isError) {
    content = <button onClick={onFetch}>Try Again</button>;
  }

  if (isLoading) {
    content = <p>Tasks Loading...</p>;
  }

  return <Card className={styles.tasks}>{content}</Card>;
};

export default Task;
