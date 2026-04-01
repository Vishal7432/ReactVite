import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1 className="text-orange-500 text-2xl font-bold mb-4 mt-8 justify-center flex">
        How to use Redux ToolKit{" "}
      </h1>

      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
