import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return console.log("hey! put your react stuff in here!!");
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
