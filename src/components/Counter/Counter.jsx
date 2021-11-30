import "./Counter.scss";

const Counter = () => {
  return (
    <div className="card__counter">
      <h3 className="card__number">0</h3>
      <div className="card__controls">
        <button className="card__increment card__btn">
          <span className="fas fa-plus change"></span>
        </button>
        <p className="card__title">Counter</p>
        <button className="card__decrement card__btn">
          <span className="fas fa-minus change"></span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
