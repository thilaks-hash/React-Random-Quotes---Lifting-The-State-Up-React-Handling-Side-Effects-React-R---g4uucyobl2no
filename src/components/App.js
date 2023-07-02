import React, { useEffect, useState } from "react";
import "../styles/App.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const App = () => {
  const [data, setData] = useState(null);

  async function getresponse() {
    const data = await fetch("https://api.quotable.io/random");
    const response = await data.json();
    setData(response.content, response.author);

    changeBackgroundColor();
  }
  useEffect(() => {
    getresponse();
  }, []);

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div id="main">
      <div id="wrapper">
        <div className="quote-text">{data}</div>
        <div className="quote-author">{data}</div>
        <button id="new-quote" onClick={getresponse}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
