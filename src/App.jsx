import "./App.css";
import Dark from "./Components/Dark";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className=" h-screen flex justify-center bg-slate-500 dark:bg-black">
      <div className=" absolute top-16 pt-12">
        <Dark />
      </div>
      <div>
        <h1 className=" text-5xl text-white uppercase font-primary font-bold text-center pt-10 ">
          Daily Task
        </h1>
        <TodoList />
        <div>
          <p className=" text-xs text-red-300 pt-10 ">
            Created by{" "}
            {
              <a
                href="https://mkhaque.com"
                target="_blank"
                className=" text-black dark:text-white"
              >
                Mk Haque
              </a>
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
