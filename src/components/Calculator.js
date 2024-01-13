import React, { useState } from "react";
import "../components/Calculator.css";
import History from "./History";

export default function Calculator() {
  const [data, setData] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (e) => {
    setData(data.concat(e.target.value));
  };

  const handleClear = () => {
    setData("");
  };

  const backSpace = () => {
    setData(data.slice(0, data.length - 1));
  };

  const handleEqualsButton = () => {
    try {
      const result = eval(data).toString();
      setHistory([...history, { expression: data, res: result }]);
      setData(result);
    } catch (error) {
      setData("Error");
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <>
      <div className="top">
        <h1>Calculator</h1>
      </div>
      <div className="main">
        <div id="calculator">
          <input type="text" id="display" value={data} disabled />
          <button id="clear" onClick={handleClear}>
            AC
          </button>
          <button id="back" onClick={backSpace}>
            DE
          </button>
          <button id="history" onClick={toggleHistory}>
            History
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="*" onClick={handleClick}>
            *
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button id="equals" onClick={handleEqualsButton}>
            =
          </button>
          <button value="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="History">
          {showHistory && <History historyData={history} />}
        </div>
      </div>
    </>
  );
}
