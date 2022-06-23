import { Component } from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: ``,
    };
  }
  onSalaryChange = (e) => {
    this.props.onChangeSalary(e.target);
  };

  setCursor = (e) => {
    if (e.target.selectionStart) {
      var end = e.target.value.length - 1;
      e.target.setSelectionRange(end, end);
      e.target.focus();
    }
  };
  set$ = (salary) => {
    if (salary.indexOf(`$`) === -1) {
      return salary + `$`;
    }
    return salary;
  };
  render() {
    const { name, salary, increase, promotion, onDelete, onTogglePromotion, onToggleIncrease } = this.props;

    let classNames = "list-group-item d-flex justify-content-between row g-0";

    if (increase) {
      classNames += ` increase`;
    }
    if (promotion) {
      classNames += ` like`;
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label col-md-1 col-6" onClick={onTogglePromotion}>
          {name}
        </span>
        <div className="empControl col-6 d-flex justify-content-end">
          <input type="text" className="list-group-item-input" value={this.set$(salary)} onClick={this.setCursor} onChange={this.onSalaryChange} />
          <div className="btns-group d-flex justify-content-center align-items-center">
            <button type="button" className="btn-cookie btn-sm" onClick={onToggleIncrease}>
              <i className="fas fa-cookie"></i>
            </button>

            <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
