import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  let [count, setCount] = useState(0);
  // function handleClick() {
  //   count = count + 1;
  //   console.log(count);
  // }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8  ">{count}</h1>
        <button
          className="bg-red-400 rounded-3xl px-6 py-3 hover:bg-red-500"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click to increase ⬆️
        </button>
        <br />
        <button
          className="bg-blue-400 rounded-3xl px-6 py-3 hover:bg-blue-500"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Click to decrease ⬇️
        </button>
      </div>
    </>
  );
}

