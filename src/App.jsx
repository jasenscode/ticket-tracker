import "./App.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import EmployeeInfo from "./components/EmployeeInfo/EmployeeInfo";
import Counter from "./components/Counter/Counter";
import employeeData from "./data/data.js";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="employee-counters">
        <EmployeeInfo employeeArr={employeeData} />
      </section>
    </div>
  );
}

export default App;
