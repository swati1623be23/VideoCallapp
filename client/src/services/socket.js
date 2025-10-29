import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_API_URL || "http://localhost:5000", {
  autoConnect: false,
  reconnection: false, // Let Meeting.jsx handle reconnection
  transports: ["websocket", "polling"],
});