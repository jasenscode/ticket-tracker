import "./EmployeeInfo.scss";

const EmployeeInfo = (props) => {
  const { name, role } = props;

  return (
    <div className="card__employee">
      <h2 className="card__info">NAME</h2>
      <p className="card__detail">{name}</p>
      <h2 className="card__info">ROLE</h2>
      <p className="card__detail">{role}</p>
    </div>
  );
};

export default EmployeeInfo;
