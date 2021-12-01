import "./App.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import employeeData from "./data/data.js";
function App() {
  return (
    <div className="App">
      <Header />
      <section className="employee-counters">
        <Card employeeArr={employeeData} />
      </section>
    </div>
  );
}

export default App;
