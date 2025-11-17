
import React, { useState } from "react";

export default function ConnectButton({ onConnect }) {
  const [status, setStatus] = useState("disconnected");

  const handleConnect = () => {
    const socket = onConnect();
    setStatus("connected");
    socket.on("connect_error", () => setStatus("error"));
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <button
        onClick={handleConnect}
        style={{
          padding: "8px 12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Connect
      </button>
      <span style={{ marginLeft: 10 }}>
        {status === "disconnected" && "Not connected"}
        {status === "connected" && "Connected ✅"}
        {status === "error" && "Connection Failed ❌"}
      </span>
    </div>
  );
}
