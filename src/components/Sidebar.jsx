import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { RateReviewOutlined } from "@mui/icons-material";
import React from "react";
import SidebarChat from "./SidebarChat";
const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100 border-r border-gray-400">
      <div className="flex items-center h-12 p-2">
        <Avatar className="cursor-pointer m-2" />
        <div className="flex items-center justify-center flex-1 bg-gray-200 text-gray-800 rounded-md p-1">
          <SearchIcon />
          <input
            placeholder="Search..."
            className="border-none bg-transparent outline-none"
          />
        </div>
        <IconButton variant="outline">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="overflow-y-scroll">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
