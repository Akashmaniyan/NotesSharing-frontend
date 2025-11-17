// import { io } from "socket.io-client";

// // change if needed, e.g. ngrok URL later
// export const BACKEND_URL = "http://localhost:5000";
// export const socket = io(BACKEND_URL);


// import { io } from "socket.io-client";

// export function createSocket() {
//   // Build backend URL using window.location.hostname so mobile auto-connects
//   // when you access the frontend via http://<laptop-ip>:3000 on mobile.
//   const host = window.location.hostname || 'localhost';
//   const backendUrl = `http://${host}:5000`; // backend port
//   const socket = io(backendUrl, { transports: ['websocket'] });
//   return socket;
// }

import { io } from "socket.io-client";

export const socket = io(process.env.REACT_APP_BACKEND_URL, {
  transports: ["websocket"],
});

