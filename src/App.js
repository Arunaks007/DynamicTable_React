import { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [box, setBox] = useState([]);

  function handleSquare() {
    let temp = 1;
    const myArr = Array(value); // declaring an array with the size we got from the input

    for (let i = 0; i < value; i++) {
      myArr[i] = []; // Adding an empty array within the newly created array to form row
    }

    for (let i = 0; i < value; i = i + 2) {
      for (let j = 0; j < value; j++) {
        myArr[j][i] = temp++;
        if (j === value - 1) {
          if (temp === value * value + 1) {
            break;
          }
          for (let v = j; v >= 0; v--) {
            myArr[v][i + 1] = temp++;
          }
        }
      }
    }
    setBox(myArr);
  }

  return (
    <div className="app">
      <h1>Dynamic table</h1>
      <input
        type="number"
        onChange={(e) => {
          setValue(() => {
            if (e.target.value.toString === ".") return value;
            else return e.target.value;
          });
        }}
      />
      <button onClick={handleSquare}>Submit</button>
      <div className="container">
        {box.map((row, index) => {
          return (
            <div key={index} id="row">
              {row.map((cell, index) => {
                return (
                  <div key={index} id="col">
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
