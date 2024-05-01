import React, { useState } from "react";

const Form = ({ createTodo }) => {
  // Destructure createTodo from props
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue(""); // Clear input field after submission
  };

  return (
    <form className="mb-4 font-primary w-full " onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-full text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="What task do you have?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className=" text-white border-none w-full rounded-md p-3 shadow-md bg-gradient-to-tr from-red-600 to-purple-600 cursor-pointer ">
        Add Task
      </button>
    </form>
  );
};

export default Form;
