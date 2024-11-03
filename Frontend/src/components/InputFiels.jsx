import React from "react";

const InputField = ({
  name, 
  label,
  id,
  value,
  onChange,
  type = "text",
  required = false,
  as = "input", 
}) => {
  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <Component
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        rows={as === "textarea" ? 4 : undefined} 
      />
    </div>
  );
};

export default InputField;
