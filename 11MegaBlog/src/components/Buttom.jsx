import React from "react";

export default function Buttom({
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-full ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
