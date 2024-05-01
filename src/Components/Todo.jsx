import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, deleteTodo, editTodo }) => {
  if (!todo) {
    return null; // Return null if todo is not valid
  }

  return (
    <div className="flex w-full justify-between items-center bg-gray-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
      <p className="font-primary">{todo.task}</p>{" "}
      {/* Display the task directly */}
      <div className="flex items-center gap-x-4">
        <AiFillEdit className="text-xl" onClick={() => editTodo(todo)} />
        <MdOutlineDeleteForever
          className="text-xl"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
