// Footer
import { Github } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4">
      {/* Devs */}
      <div className="flex justify-end text-grayForeground">
        <div className="flex items-center">
          <Github size={20} />
          <span className="mr-2">Devs:</span>
        </div>
        <a
          href="https://github.com/yuKILLING"
          target="_blank"
          className="mr-2 underline underline-offset-4"
        >
          yukilling
        </a>
        <a
          href="https://github.com/osamikoyo"
          target="_blank"
          className="underline underline-offset-4"
        >
          osamikoyo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
