import React from "react";

export default function Card(props) {
  console.log(props.username);
  return (
    <div className="flex flex-col items-center p-6 gap-4 rounded-2xl ">
      <h1>{props.username}</h1>
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
        />
      </div>
      <div className="flex items-center flex-col">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}
