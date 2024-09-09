import React, { useState } from "react";
import { MicNone } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Chat = () => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");
    // firebase magic
  };

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <div className="border-b border-gray-200 p-5 flex justify-between bg-gray-100 w-full">
        <div className="space-x-2">
          <h4 className="font-thin text-gray-900 inline">To :</h4>
          <span className="text-black font-semibold">Channel name</span>
        </div>
        <strong>Details</strong>
      </div>
      {/* chat messages  */}
      <div className="flex-1">
        <h2>I am a message</h2>
        <h2>I am a message</h2>
        <h2>I am a message</h2>
        <h2>I am a message</h2>
        <h2>I am a message</h2>
      </div>
      <div className="flex items-center py-3 px-5 border-t border-gray-200 bg-gray-100">
        <form className="flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Whisper"
            className="w-full outline-none border border-gray-200 rounded-full py-1 px-4"
          />
          <button className="hidden" onClick={sendMessage}>
            Send Message
          </button>
        </form>
        <IconButton>
          <MicNone />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
