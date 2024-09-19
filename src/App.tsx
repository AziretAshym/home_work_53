import { useState } from 'react'
import './App.css'
import AddTaskForm from "./componenta/AddTaskForm.tsx";
import Task from "./componenta/Task.tsx";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Go to the store'},
    { id: '2', text: 'Buy bread'},
    { id: '3', text: 'Return home'},
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const addNewTask = () => {
    if (currentTask) {
      const newTask = {
        id: Date.now().toString(),
        text: currentTask
      };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    } else {
      alert('Fill in the input field!')
    }
  };


  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <AddTaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} addNewTask={addNewTask}></AddTaskForm>
      <div className="tasksContainer">
        {tasks.map((task) => (
            <Task key={task.id} taskText={task} deleteCurrentTask={() => deleteTask(task.id)}></Task>
        ))}
      </div>
    </>
  )
};

export default App
