import React, { useState } from "react";

function Child() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1> <small class="text-muted"></small>Count :{count}</h1>
      <button type="button" className="btn btn-primary" onClick={Increment}>Increment</button>
      <button type="button" className="btn btn-success" onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default Child;
