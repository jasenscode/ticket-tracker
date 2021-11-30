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
      <CardContainer />
      <Card />
      <EmployeeInfo />
      <Counter />
    </div>
  );
}

export default App;
