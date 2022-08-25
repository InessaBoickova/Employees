import React from 'react';

import "./app-info.css";

class AppInfo extends React.Component{
    render(){
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {this.props.totalNumEmployees}</h2>
                <h2>Премию получат: {this.props.employeesEncreased}</h2>
            </div>
        )
    }
}

export default AppInfo;