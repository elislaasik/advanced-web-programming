import React from 'react';
import Task from "./Task";

export default class List extends React.Component {
    
    generateTodos() {
        return this.props.todos.map(todo => 
            <Task key={todo.title} task={todo}/>
        )
    }

    render(){
        return (
            <div>
                <ul onChange={this.hangleChange}>{this.generateTodos()}</ul>
            </div>
        )
    }
}