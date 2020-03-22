import React from "react";
import employees from "../employees.json"
import "./style.css"

class Table extends React.Component {

  state = {
    employeesState: employees,
    fllterChoice: ""
  }

  sortName = (arr) => {
    return arr.sort((a, b) => a.lastname > b.lastname ? 1 : -1);
  }

  sortReset = (arr) => {
    return arr.sort((a, b) => a.id > b.id ? 1 : -1);
  }

  sortByName = () => {
    this.setState({ employeesState: this.sortName(employees)});
  }

  filterByRole = () => {
    let choice = "Manager"; //this will become the role/position that will be filtered from id="filter-methods" val()
    this.setState({ employeesState: employees.filter(employee => employee.role === choice)});
  }

  resetTable = () => {
    this.setState({ employeesState: this.sortReset(employees) })
  }

  render() {
    return (
      <>
      <div className="jumbotron bg-info">
        <h1 className="display-4 text-center main-header">Employee Directory</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 column-styling text-center">
            <button className="btn btn-primary long-button text-center" onClick={this.sortByName}>Sort by Last Name</button>
          </div>
          <div className="col-sm-6 column-styling text-center">
            <select id="filter-methods">
              <option value="Salesman">Filter to Salesmen</option>
              <option value="Manager">Filter to Managers</option>
              <option value="Engineer">Filter to Engineers</option>
            </select>
            <button className="btn btn-primary small-button text-center" onClick={this.filterByRole}>Filter</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 table-column rounded bg-info">
            <table className="check rounded">
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
              </tr>
              {
                this.state.employeesState.map((employee) =>
                <tr>
                  <td>{employee.id}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.role}</td>
                </tr>)
              }
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 column-styling reset-column">
            <button className="btn btn-primary large-button text-center" onClick={this.resetTable}>Reset Table</button>
          </div>
        </div>
      </div>
      </>
    );
  }

  
}

export default Table;

// make a function that says "okay run render where x = the sort/filter function with proper arg"
// or make many functions that each have their specific render and make a wrapper function which calls them based on the input of the sort/filter function (x = this thing)
