import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

function EmployeesList({ data, onDelete, onToggleIncrease, onTogglePromotion, onChangeSalary }) {
  const elements = data.map((li) => {
    const { id, ...liProps } = li;
    return (
      <EmployeesListItem
        key={id}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onTogglePromotion={() => onTogglePromotion(id)}
        onChangeSalary={(e) => onChangeSalary(id, e)}
        {...liProps}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
}

export default EmployeesList;
