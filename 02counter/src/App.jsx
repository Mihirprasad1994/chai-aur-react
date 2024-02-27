import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(20);

  function increment() {
    if (counter < 30) {
      setCounter(counter + 1);
    }
  }
  function decrement(params) {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Chai Aur Code</h1>
      <h3>Counter Value:{counter}</h3>
      <button onClick={increment}>Increase{counter}</button>
      <button onClick={decrement}>Decrease{counter}</button>
    </>
  );
};

export default App;
