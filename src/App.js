import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div style={{ padding: "40px 50px" }}>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
