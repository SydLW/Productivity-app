import "./App.css";
import Productivity from "./components/Productivity";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>Productivity</h1>
      <Productivity />
      <Todo />
    </div>
  );
}

export default App;
