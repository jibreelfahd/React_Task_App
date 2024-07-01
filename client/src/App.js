import React, { useState, useEffect, useCallback } from "react";

import Task from "./components/Tasks/Task";
import NewTask from "./components/NewTasks/NewTask";
import useHttpRequest from "./hooks/use-http-request";

const App = () => {
  const [loadTasks, setLoadTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");

  const transformedData = useCallback(taskData => {
    let loadedTask = [];

    for (const key in taskData.tasks) {
      loadedTask.push({
        id: taskData.tasks[key]._id,
        task: taskData.tasks[key].task
      });
     }

    setLoadTasks(loadedTask)
  }, []);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttpRequest(transformedData);

  useEffect(() => {
    fetchTasks({ url: "http://localhost:8080/api/fetch/tasks" });
  }, [fetchTasks]);

  console.log(loadTasks);

  const addTaskHandler = (task) => {
    setLoadTasks((prevState) => prevState.concat(task));
  };
  return (
    <>
      <main>
        <NewTask onAddTaskHandler={addTaskHandler} />
      </main>
      <main>
        <Task
          isError={error}
          isLoading={isLoading}
          onFetch={fetchTasks}
          tasks={loadTasks}
        />
      </main>
    </>
  );
};

export default App;
