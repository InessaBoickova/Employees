import React from 'react';
import EmployeesListItem from "../EmployeesListItem/employees-list-item";
import './employees-list.css';

class EmployeesList extends React.Component{
    render(){
        return (
            <ul className="app-list list-group">
                <EmployeesListItem/>
                <EmployeesListItem/>
                <EmployeesListItem/>
            </ul>
        )
    }
}

export default EmployeesList;