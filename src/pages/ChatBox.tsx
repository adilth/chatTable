import React, { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";
import "./ChatBox.css";

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const { send, socket } = useWebSocket("wss://echo.websocket.org");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    send(messageInput);
    setMessageInput("");
    setMessages([...messages, messageInput]);

    if (socket && messageInput) {
      socket.emit("new-message", messageInput);
    }
  };

  return (
    <div>
      <h2>Chat Box</h2>
      <div className="message-display">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>{" "}
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
