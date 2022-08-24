import React from 'react';
import AppInfo from '../AppInfo/app-info';
import SearchPanel from '../SearchPanel/search-panel';
import AppFilter from '../AppFilter/app-filter';
import EmployeesList from '../EmployeesList/employees-list';
import EmployeesAddForm from '../EmployeesAddForm/employees-add-form';
import './app.css';

let data = [
      {name: 'John S.' , salary: 1000 , increase: false},
      {name: 'Masha R.', salary: 1200 , increase: false},
      {name: 'Alex M.', salary: 800, increase: true}
  ]

class App extends React.Component{
  render(){
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
              <SearchPanel/>
              <AppFilter/> 
            </div>
            <EmployeesList data = {data}/>
            <EmployeesAddForm/> 
       </div>
    )
  }
}

export default App