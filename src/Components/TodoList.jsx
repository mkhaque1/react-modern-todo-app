import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Edit from "./Edit";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (task) => {
    setTodo([...todoValue, { id: uuidv4(), task: task, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (editedTodo) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === editedTodo.id ? { ...editedTodo, isEditing: true } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="container mx-auto dark:bg-sky-700 bg-blue-950 mt-20 p-8 rounded-md">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            todo={todo}
            key={idx}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
