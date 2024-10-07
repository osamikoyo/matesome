import { User } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-darkerBackground py-2 flex justify-around items-center border-primaryBackground">
      <h1 className="text-xl cursor-pointer">mate@some:~</h1>
      <User className="cursor-pointer"/>
    </header>
  );
};

export default Header;
