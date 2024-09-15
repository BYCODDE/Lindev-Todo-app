import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

import { createContext } from "react";
export const TaskContext = createContext();
import { fetchData } from "./services/apitodos";
function App() {
  const [addTasks, setAddTasks] = useState([]);
  const [addTask, setAddTask] = useState({
    description: "",
    id: "",
    checked: null,
    createdAt: Date.now(),
  });

  useEffect(() => {
    fetchData();
  });
  const [description, setDescription] = useState("");

  return (
    <TaskContext.Provider
      value={{
        addTasks,
        setAddTasks,
        addTask,
        setAddTask,
        description,
        setDescription,
      }}
    >
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </TaskContext.Provider>
  );
}

export default App;
