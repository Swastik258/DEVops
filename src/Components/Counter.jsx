import React, { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0);

  function increment(){

    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }
  return (
    <div>
      <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
  <a className="navbar-brand">Navbar</a>
  <form className="form-inline">
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-dange my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
</nav>

      </div>
      <h1 className="text-3xl font-bold underline">Count:{count}</h1>
      <button type="button" className="btn btn-success" onClick={increment}>Increment</button>
      <button type="button" className="btn btn-danger" onClick={decrement}>Decrement</button>
      <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>

    </div>
  )
}

export default Counter
