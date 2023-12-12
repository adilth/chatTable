import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import { updateMessage } from "../redux/actions";
const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const newSocket = io(url, { transports: ["websocket", "polling"] });

    newSocket.on("connect", () => {
      console.log("Socket.IO connection opened");
    });

    newSocket.on("message", (data: string) => {
      console.log("Socket.IO message received:", data);
      dispatch(updateMessage(data));
    });

    newSocket.on("disconnect", () => {
      console.log("Socket.IO connection closed");
    });

    newSocket.on("error", (error: Error) => {
      console.error("Socket.IO error:", error);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [url, dispatch]);

  const send = (message: string) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  return { send, socket };
};

export default useWebSocket;
