import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load data
  useEffect(() => {
    const savedTasks = localStorage.getItem("react-progress");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks([
        { title: "Components", desc: "Reusable UI", done: false },
        { title: "Props", desc: "Pass data", done: false },
        { title: "State", desc: "Dynamic UI", done: false }
      ]);
    }
  }, []);

  // Save data
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("react-progress", JSON.stringify(tasks));
    }
  }, [tasks]);

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.done).length;

  return (
    <div className="container">
      <h1>React Learning Dashboard</h1>
      <Header name="Snehal" />

      <h3 className="progress">
        Progress: {completedCount} / {tasks.length} Completed
      </h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(completedCount / tasks.length) * 100}%` }}
        ></div>
      </div>

      <div className="card-container">
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            desc={task.desc}
            done={task.done}
            onToggle={() => toggleTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;