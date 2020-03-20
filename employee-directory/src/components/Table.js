import React from "react";
import employees from "../employees.json"
import "./style.css"

class Table extends React.Component {

  state = {
    sortChoice: "",
    filterChoice: ""
  }

  sortByChoice = () => {
    let choice = ""; // this will become the choice for sorting from id="sort-methods" val()
    this.setState({sortChoice: ""});
  }

  filterByRole = () => {
    let choice = ""; //this will become the role/position that will be filtered from id="filter-methods" val()
    this.setState({filterChoice: ""});
    employees.filter(employee => employee.role === choice);
  }

  resetTable = () => {
    //should reset the table to normal, no filtering or sorting
  }

  render() {
    return (
      <>
      <div className="jumbotron bg-info">
        <h1 className="display-4 text-center main-header">Employee Directory</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4 column-styling">
            <label for="sort-methods">Sort</label>
            <select id="sort-methods">
              <option value="id">Sort by ID</option>
              <option value="lastName">Sort by Last Name</option>
              <option value="role">Sort by Position</option>
            </select>
            <button className="btn btn-primary small-button text-center" onClick={this.sortByChoice}>Sort</button>
          </div>
          <div className="col-sm-4 column-styling">
            <label for="filter-methods">Filter</label>
            <select id="filter-methods">
              <option value="Salesman">Filter to Salesmen</option>
              <option value="Manager">Filter to Managers</option>
              <option value="Engineer">Filter to Engineers</option>
            </select>
            <button className="btn btn-primary small-button text-center" onClick={this.filterByRole}>Filter</button>
          </div>
          <div className="col-sm-4 column-styling">
            <button className="btn btn-primary large-button" onClick={this.resetTable}>Reset Table</button>
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
                employees.map((employee) =>
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
      </div>
      </>
    );
  }

  
}

export default Table;
