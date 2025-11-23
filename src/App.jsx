import { useState,useEffect } from "react"
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import CreateTask from "./pages/CreateTask"
import EditTask from "./pages/EditTask"

function App() {

  const [users, setusers] = useState([{
    username: "Ragu",
    password: "123"
  }])

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
          <Route path="/signup" element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path="/landing" element={<Landing tasks={tasks} setTasks={setTasks} />}></Route>
          <Route path="/createtask" element={<CreateTask tasks={tasks} setTasks={setTasks} />}></Route>
          <Route path="/editask" element={<EditTask tasks={tasks} setTasks={setTasks} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
