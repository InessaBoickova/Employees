import React from 'react';

import './employees-list-item.css';

class EmployeesListItem extends React.Component{
    render(){
        let className = 'list-group-item d-flex justify-content-between';

        if(this.props.increase){
            className += ' increase';
        }
        if(this.props.rise){
            className += ' like';
        }

        return(
            <li className={className}>
                <span className="list-group-item-label" onClick={this.props.onToggleProp} data-toggle= 'rise'>{this.props.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={this.props.salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm" onClick={this.props.onToggleProp} data-toggle= 'increase'>
                    <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={this.props.onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;