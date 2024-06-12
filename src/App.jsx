import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function App() {
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <h1
        style={{
          padding: "70px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        {/* i'm a {""} */}
        <span style={{ fontWeight: "bold", color: "red" }}>i'm a {""}</span>
        <span style={{ fontWeight: "bold", color: "green" }}> {text}</span>
        <span style={{ color: "red" }}>
          <Cursor cursorStyle="!" />
        </span>
      </h1>
    </div>
  );
}

export default App;
