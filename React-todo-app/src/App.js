import React, {Component} from 'react';
import List from "./List";
import './style.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    title: 'code a lot',
                    checked: false
                },
                {
                    title: 'go to sleep early',
                    checked: false
                },
                {
                    title: 'buy chicken',
                    checked: false
                }
            ]
        }
    }
    
    addTodo = () => {
        let updatedTodos = this.state.todos;
        updatedTodos.push({
            title: document.querySelector('#todoCreator').value,
            checked: false
        });
        this.setState({ todos: updatedTodos });
    }
    
    render() {
        return (
            <div className="todobox">
                <h1>Todo until you drop</h1>
                <input type="text" name="todoCreator" placeholder="get working!" id="todoCreator"></input>
                <input type="submit" value="Submit" onClick={this.addTodo} id="submitButton"></input>
                <List todos={this.state.todos} />
                <div className="goodJob">

                </div>
            </div>
            
        );
    }
}

export default App;
