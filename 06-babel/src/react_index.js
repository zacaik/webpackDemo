import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [foo] = useState("hello");

  return <div>{foo}</div>;
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
