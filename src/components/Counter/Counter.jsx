import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <span className="counter__number">{count}</span>
      <div className="counter__controls">
        <button onClick={decrementCount} className="counter__decrement counter__btn">
          <span className="fas fa-minus change"></span>
        </button>
        <p className="counter__title">Counter</p>
        <button onClick={incrementCount} className="counter__increment counter__btn">
          <span className="fas fa-plus change"></span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
