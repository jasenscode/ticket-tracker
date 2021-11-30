import "./App.scss";
import Header from "./components/Header/Header";
import CardContainer from "./components/CardContainer/CardContainer";
import Card from "./components/Card/Card";
import EmployeeInfo from "./components/EmployeeInfo/EmployeeInfo";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer>
        <EmployeeInfo />
        <Counter />
      </CardContainer>

      <div className="card">
        <div className="card__employee">
          <h2 className="card__info">NAME</h2>
          <p className="card__detail">Jasen Chawda </p>
          <h2 className="card__info">ROLE</h2>
          <p className="card__detail">Junior Developer</p>
        </div>
        <div className="card__counter">
          <h3 className="card__number">0</h3>
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
