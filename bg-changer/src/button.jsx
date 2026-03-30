import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  const colorsArray = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
    { color: "grey" },
    { color: "yellow" },
    { color: "black" },
    { color: "pink" },
    { color: "violet" },
    { color: "purple" },
    { color: "olive" },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          {colorsArray.map((item, index) => (
            <button
              key={index}
              onClick={() => setColor(item.color)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer capitalize"
              style={{ backgroundColor: item.color }}
            >
              {item.color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
