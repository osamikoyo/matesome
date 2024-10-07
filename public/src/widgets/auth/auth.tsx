// Auth section
import { Cat } from "lucide-react";
import Input from "../../shared/ui/components/Input";
import Button from "../../shared/ui/components/Button";
import { useState } from "react";

const Auth: React.FC = () => {
  const [tab, setTab] = useState<string>("login");

  const handleTab = () => {
    setTab(tab === "login" ? "reg" : "login");
  };

  return (
    <div className="h-[700px] w-[1000px] grid grid-cols-2 border dark:border-[#27272A] justify-items-center m-auto rounded-md text-white overflow-hidden">
      {/* Welcome div */}
      <div className="w-full p-10 bg-someGrayBackground flex flex-col justify-between border-r border-[#27272A]">
        <div className="flex gap-1 items-center">
          <Cat size={30} />
          <h3 className="text-2xl">MateSome</h3>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xl">
            “Alone we can do so little, together we can do so much.”
          </p>
          <span className="italic">Helen Keller</span>
        </div>
      </div>

      {/* Auth Form */}
      <div className="w-full flex flex-col justify-center items-center p-10 relative">
        <div className="absolute top-10 right-10">
          <Button onClick={handleTab}>
            {tab === "reg" ? "Log in" : "Sign In"}
          </Button>
        </div>
        {/* Registration tab */}
        {tab === "reg" && (
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              Create an account.
            </h1>
            <span className="text-sm text-grayForeground">
              Enter data below to create your account
            </span>
            <div className="w-full flex flex-col px-10 gap-2 mt-5">
              <Input placeholder="Enter email" type="email" />
              <Input placeholder="Enter username" type="text" />
              <Input placeholder="Verify password" type="password" />
              <Button>Sign in</Button>
            </div>
          </>
        )}
        {/* Login tab */}
        {tab === "login" && (
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              Log in account.
            </h1>
            <span className="text-sm text-grayForeground">
              Enter data below to log in.
            </span>
            <div className="w-full flex flex-col px-10 gap-2 mt-5">
              <Input placeholder="Enter email" type="email" />
              <Input placeholder="Enter password" type="password" />
              <Button>Log In</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
