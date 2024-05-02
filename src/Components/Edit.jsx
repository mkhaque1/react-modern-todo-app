import React, { useState } from "react";

const Edit = ({ editTodo, task }) => {
  // Destructure createTodo from props
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue(""); // Clear input field after submission
  };

  return (
    <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none  bg-transparent border border-gray-500 p-4 w-[320px] text-white dark:text-gray-600 mb-8 rounded placeholder:text-gray-300"
        placeholder="Update your List"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className=" bg-red-500 hover:bg-purple-600 transition duration-500 focus:outline-none focus:ring focus:ring-violet-300 p-4  rounded-md text-white cursor-pointer ml-2">
        Update
      </button>
    </form>
  );
};

export default Edit;
