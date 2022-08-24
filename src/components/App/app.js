import React from 'react';
import AppInfo from '../AppInfo/app-info';
import SearchPanel from '../SearchPanel/search-panel';
import AppFilter from '../AppFilter/app-filter';
import EmployeesList from '../EmployeesList/employees-list';
import EmployeesAddForm from '../EmployeesAddForm/employees-add-form';
import './app.css';

class App extends React.Component{
  render(){
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
              <SearchPanel/>
              <AppFilter/> 
            </div>
            <EmployeesList/>
            <EmployeesAddForm/> 
       </div>
    )
  }
}

export default App