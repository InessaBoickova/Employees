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
            {name: 'John S.' , salary: 1000 , increase: false,rise: false, id: 1},
            {name: 'Masha R.', salary: 1200 , increase: false,rise: false, id: 2},
            {name: 'Alex M.', salary: 800, increase: false, rise: false, id: 3}
          ]
        }
      this.maxId = 4;
  }

  deleteItem =(id)=>{
      this.setState(({data})=> {
          return {
            data: data.filter(item => item.id !== id)
          }
      })
  }

  addItem = (name, salary) => {
    
    if(!name && !salary){
      alert('Введите корректные данные!')
      return this.addItem;
    }

    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }

    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  onToggleProp = (id,prop) =>{
     this.setState(({data}) => ({
        data: data.map(item =>{
          if(item.id === id){
            return {...item, [prop]: !item[prop]};
          }
          return item;
        })
     }))
  }

  render(){
    let totalNumEmployees = this.state.data.length;
    let employeesEncreased = this.state.data.filter(item => item.increase).length;
    return (
        <div className="app">
            <AppInfo totalNumEmployees = {totalNumEmployees}
                      employeesEncreased = {employeesEncreased}/>
            <div className="search-panel">
              <SearchPanel/>
              <AppFilter /> 
            </div>
            <EmployeesList data = {this.state.data}
            onDelete ={this.deleteItem}
            onToggleProp = {this.onToggleProp}/>
            <EmployeesAddForm onAdd={this.addItem}/> 
       </div>
    )
  }
}

export default App