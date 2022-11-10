import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentist appointment",
      day: "14 Febr 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Parents meeting",
      day: "21 Apr 2033",
      reminder: true,
    },
    {
      id: 3,
      text: "Horse riding lessons",
      day: "15 Febr 2023",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header title="My Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
