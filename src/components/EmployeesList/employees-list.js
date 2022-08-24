import React from 'react';
import EmployeesListItem from "../EmployeesListItem/employees-list-item";
import './employees-list.css';

class EmployeesList extends React.Component{
    
    render(){

        const elem = this.props.data.map((item)=>{
            return (
                <EmployeesListItem {...item}/>
            )
        })

        return (
            <ul className="app-list list-group">
                {elem}
            </ul>
        )
    }
}

export default EmployeesList;