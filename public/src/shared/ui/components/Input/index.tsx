import React from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-2 py-2 border border-[#27272A] outline-none bg-transparent rounded-md focus:border-white transition placeholder:text-sm ${className}`}
    />
  );
};

export default Input;
