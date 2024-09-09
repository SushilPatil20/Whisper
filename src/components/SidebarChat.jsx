import { Avatar } from "@mui/material";
import React from "react";

const SidebarChat = () => {
  return (
    <div className="flex items-center p-5 border-b border-gray-200 cursor-pointer hover:bg-blue-600 hover:text-white duration-150 ">
      <Avatar />
      <div className="ml-4 relative w-full">
        <h3>Channel Name</h3>
        <p>Last message sent...</p>
        <small className="absolute top-1 right-0">Time stamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
