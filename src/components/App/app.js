import React from 'react';

import AppInfo from '../AppInfo/app-info';
import SearchPanel from '../SearchPanel/search-panel';
import AppFilter from '../AppFilter/app-filter';
import EmployeesList from '../EmployeesList/employees-list';
import EmployeesAddForm from '../EmployeesAddForm/employees-add-form';

import './app.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data : [
            {name: 'John S.' , salary: 1000 , increase: false, id: 1},
            {name: 'Masha R.', salary: 1200 , increase: false, id: 2},
            {name: 'Alex M.', salary: 800, increase: true, id: 3}
          ]
        }
  }

  deleteItem =(id)=>{
      this.setState(({data})=> {
          return {
            data: data.filter(item => item.id !== id)
          }
      })
  }

  render(){
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
              <SearchPanel/>
              <AppFilter/> 
            </div>
            <EmployeesList data = {this.state.data}
            onDelete ={this.deleteItem}/>
            <EmployeesAddForm/> 
       </div>
    )
  }
}

export default App