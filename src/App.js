import React from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>Real-time Clipboard (Cloud)</h1>
      <NoteInput />
      <NoteList />
    </div>
  );
}

export default App;
