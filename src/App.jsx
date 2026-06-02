import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setcount] = useState(0);
  const increase = () => {
    setcount(count + 1);
  };
  const decrease = () => {
    setcount(count - 1);
  };
  return (
    <div className="app">
      <div className="main">
        <div className="head">
          <h2>Counter App</h2>
        </div>
        {/* <div className="count">
          <h1 className="count">{count}</h1>
        </div> */}
        <div className="counter">
          <button onClick={decrease}>-</button>
          <h2 className="count">{count}</h2>
          <button onClick={increase}>+</button>
        </div>
        <div className="reset">
          <button onClick={() => setcount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
