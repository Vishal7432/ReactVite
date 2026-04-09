import React, { useId } from "react";

function Select({ option, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
        ref={ref}
        {...props}
        id={id}
      >
        {option?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
