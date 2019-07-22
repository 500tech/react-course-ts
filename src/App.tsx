import React, { useState } from "react";
import "./App.css";

function useCount() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count => count + 1);
  return { count, incrementCount };
}

const Counter: React.FC = () => {
  console.log("render");
  const [clicks, setClicks] = useState(0);
  const { count, incrementCount } = useCount();
  return (
    <div
      onClick={e => {
        console.log(e.target);
        setTimeout(() => {
          console.log(e.target);
          setClicks(clicks + 1);
          incrementCount();
          incrementCount();
        });
      }}
    >
      {clicks} {count}
    </div>
  );
};

const App: React.FC = () => {
  const { count, incrementCount } = useCount();
  return (
    <div className="App" onDoubleClick={incrementCount}>
      <Counter />
      {count}
    </div>
  );
};

export default App;
