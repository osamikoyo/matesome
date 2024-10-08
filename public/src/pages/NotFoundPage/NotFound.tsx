import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <span className="text-2xl border-r pr-3 py-2 border-someGray font-semibold">
        404
      </span>
      <span className="ml-1">This page could not be found. </span>
    </div>
  );
};
export default NotFound;
