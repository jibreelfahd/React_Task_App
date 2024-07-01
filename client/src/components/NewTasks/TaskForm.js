import React, { useRef } from "react";

import styles from './TaskForm.module.css';

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event)=> {
    event.preventDefault();


    const enteredTask = taskInputRef.current.value; 
    
    if (enteredTask.trim().length > 0) {
      props.onAddTask(enteredTask);
    }
  }
   return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type='text' id="task" ref={taskInputRef} />
      <button>{props.isLoading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;