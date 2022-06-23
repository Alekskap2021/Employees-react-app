import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: `800`, increase: false, promotion: false, id: 1 },
        { name: "Alex M.", salary: `2500`, increase: false, promotion: false, id: 2 },
        { name: "Carl W.", salary: `15000`, increase: false, promotion: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addItem = (name, salary) => {
    if (name && salary) {
      const newItem = {
        name,
        salary,
        increase: false,
        promotion: false,
        id: this.maxId++,
      };
      this.setState(({ data }) => ({
        data: [...data, newItem],
      }));
    }
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onTogglePromotion = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, promotion: !item.promotion };
        }
        return item;
      }),
    }));
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "onPromotion":
        return items.filter((item) => item.promotion);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      case "onIncrease":
        return items.filter((item) => item.increase);
      default:
        return items;
    }
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onChangeSalary = (id, e) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          item.salary = e.value;
          return item;
        }
        return item;
      }),
    }));
  };

  render() {
    const { term, data, filter } = this.state;
    return (
      <div className="app">
        <AppInfo amount={data.length} withIncrease={data.filter((item) => item.increase).length} />

        <div className="search-panel row g-0">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={this.filterPost(this.searchEmp(data, term), filter)}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onTogglePromotion={this.onTogglePromotion}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onPush={this.addItem} />
      </div>
    );
  }
}

export default App;

//Объединить методы
//Написать адаптив
//Залить билд на хероку
