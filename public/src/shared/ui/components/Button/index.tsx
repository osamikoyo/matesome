import { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`dark:bg-white dark:text-black text-white bg-primaryBackground px-4 py-2 rounded font-medium text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
