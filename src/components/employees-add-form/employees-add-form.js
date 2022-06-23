import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onPush(this.state.name, this.state.salary);
    this.setState({
      name: ``,
      salary: ``,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-md-flex d-block row g-0" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-controll new-post-label col-md-4 col-12"
            name="name"
            placeholder="Как его зовут?"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-controll new-post-label col-md-4 col-12"
            name="salary"
            placeholder="З/П в $?"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light col-md-2 col-12">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
