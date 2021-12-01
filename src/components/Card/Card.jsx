import "./Card.scss";
import EmployeeInfo from ".././EmployeeInfo/EmployeeInfo";
import Counter from ".././Counter/Counter";

const Card = () => {
  return (
    <div className="card">
      <>
        <EmployeeInfo />
      </>
      <>
        <Counter />
      </>
    </div>
  );
};

export default Card;
