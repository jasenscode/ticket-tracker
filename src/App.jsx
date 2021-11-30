import "./App.scss";
import Header from "./components/Header/Header";
import CardContainer from "./components/CardContainer/CardContainer";
import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <div className="card">
        <div className="card__employee">
          <p className="card__name">Name:</p>
          <p>Jasen</p>
          <p className="card__role">Role:</p>
          <p>Junior Dev</p>
        </div>
        <div className="card__counter">
          <h3 className="card__number">3</h3>
          <div className="card__controls">
            <button className="card__btn">
              <span className="fas fa-plus"></span>
            </button>
            <p className="card__title">Counter</p>
            <button className="card__btn">
              <span className="fas fa-minus"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
