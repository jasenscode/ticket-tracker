import "./EmployeeInfo.scss";

const EmployeeInfo = (props) => {
  const { name, role } = props;

  return (
    <div className="employee">
      <h2 className="employee__info">NAME</h2>
      <p className="employee__detail">{name}</p>
      <h2 className="employee__info">ROLE</h2>
      <p className="employee__detail">{role}</p>
    </div>
  );
};

export default EmployeeInfo;
