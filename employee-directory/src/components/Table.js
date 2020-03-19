import React from "react";
import employees from "../employees.json";

function Table(props) {
  return (
    <table>
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
  );
}

export default Table;

// itemNot.map((item) => 
// <li className="list-group-item" key={item.id}>
//   {item.name}
// </li>)