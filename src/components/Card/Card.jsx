import "./Card.scss";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import Counter from "../Counter/Counter";

const Card = (props) => {
  const { employeeArr } = props;

  const employeeInfo = employeeArr.map((employee, index) => {
    return (
      <div className="card" key={"employee" + index}>
        <EmployeeInfo name={employee.name} role={employee.role} />
        <Counter />
      </div>
    );
  });

  return <>{employeeInfo}</>;
};

export default Card;
