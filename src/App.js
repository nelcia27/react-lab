import React from 'react';
import toDosData from "./toDosData";
import './App.css';
import Filter from './Filter';
import ToDoList from './ToDoList';
import NewTask from './NewTask';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDosData,
      hide: false,
      idgen:5
    }

    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.addFilter = this.addFilter.bind(this)
        
  }
    
  handleChange(id) {
    this.setState(prevState => {
    const updatedTodos = prevState.todos.map(todo => {
      if (todo.id === id) {
        todo.completed=!todo.completed
      }
      return todo
    })
    return {
      todos: updatedTodos
    }
    })
  }

  addTask(task){
    this.setState(prevState=>{
    var val = ({
      text: task,
      id: prevState.idgen+1,
      completed: false})

    return {
      todos: [...this.state.todos, val],
      idgen: prevState.idgen+1,
    }
    })
  }

  addFilter(){
    this.setState(prevState =>{
      return{
          hide: !prevState.hide
      }
    })
  }

  render() {
    var todos = [];
    if (this.state.hide === true){
      todos = this.state.todos.filter(todo => !todo.completed);
    }else if (this.state.hide === false){
      todos = this.state.todos;
    }

    return (
      <div className="App">
        <header className="App-header">
          To do list
        </header>
        <div>
          <Filter addFilter={this.addFilter} filtr={this.state.hide}/>
          <NewTask addTask={this.addTask}/>
          <ToDoList list={todos} handleChange={this.handleChange} showAll={this.state.use}/>
        </div>
      </div>
        );
  }
}

export default App