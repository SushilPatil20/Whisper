import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Imessage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Chat />
    </div>
  );
};
export default Imessage;
