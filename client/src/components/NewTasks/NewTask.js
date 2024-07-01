import React from "react";

import TaskForm from "./TaskForm";
import useHttpRequest from "../../hooks/use-http-request";
import Card from "../UI/Card";

const NewTask = (props) => { 
  const configureData = (taskObj) => {

    const newAddedTask = { task: taskObj.tasks.task, id: taskObj.tasks._id};

    props.onAddTaskHandler(newAddedTask);
  };

  const {
    isLoading: loading,
    error,
    sendRequest: sendTaskRequest,
  } = useHttpRequest(configureData);

  const newTaskHandler = async (task) => {
    const configureRequest = {
      url: "http://localhost:8080/api/create/tasks",
      method: "POST",
      body: { task },
      headers: {
        "Content-Type": "application/json",
      },
    };

    sendTaskRequest(configureRequest);
  };
  return (
    <Card>
      <TaskForm onAddTask={newTaskHandler} isLoading={loading} />
      {error && <p>{error}</p>}
    </Card>
  );
};

export default NewTask;
