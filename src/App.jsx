import { useState } from "react";
import "./App.css";
import Header from "./components/header/Headers";
import Main from "./components/TopMain/Main";
import Maintasks from "./components/MainTasks/Maintasks";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import Footer from "./components/footer/Footer";

function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const addTasks = () => {
    if (task.trim() !== "") {
      if (task.trim().length < 20) {
        setTodo((prev) => [...prev, task]);
        setTask("");
      } else {
        setTask("");
      }
    }
  };
  const deleteFoo = (todo) => {
    setTodo((prev) => prev.filter((item) => item !== todo));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTasks();
    }
  };
  let value = `${[...new Set(todo)].length} items left`;

  return (
    <>
      <div className="body">
        <Header />
        <Main
          foo={handleKeyPress}
          value={task}
          change={setTask}
          addTasksFoo={addTasks}
        />
        <div className="fixDivResp">
          <div className="tasks">
            {[...new Set(todo)].map((item) => {
              return (
                <Maintasks deleteFoo={() => deleteFoo(item)} value={item} />
              );
            })}
            <div className="counterDiv">
              <TaskCounter value={value} />
              <TaskCounter value="Clear Completed" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
