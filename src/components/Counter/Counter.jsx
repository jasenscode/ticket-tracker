import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <span className="counter__number">0</span>
      <div className="counter__controls">
        <button className="counter__increment counter__btn">
          <span className="fas fa-plus change"></span>
        </button>
        <p className="counter__title">Counter</p>
        <button className="counter__decrement counter__btn">
          <span className="fas fa-minus change"></span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
