import React from "react";
import "./History.css";

const History = ({ historyData }) => {
  return (
    <div id="history-container">
      <h2>History</h2>
      <ul>
        {historyData.map((item, index) => (
          <li key={index}>
            <h3>
              {item.expression}={item.res}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
