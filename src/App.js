import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(50);

  const scrollHandler = (event) => {
    const { scrollTop, scrollHeight, offsetHeight } = event.target;
    if (scrollTop > scrollHeight - offsetHeight - 20) {
      setCount((prevCount) => prevCount + 50);
    }
  };

  let elements = [];

  for (let i = 1; i <= count; i++) {
    elements.push(<p key={i}>{i}</p>);
  }

  return (
    <>
      <h1>Infinite Scroll</h1>
      <div className="scrollContainer" onScroll={scrollHandler}>
        {elements}
      </div>
    </>
  );
}

export default App;
