import React, { Component } from 'react'
import { Counter } from '../components/Counter';
import Test from '../components/Test';
import TodoList from '../components/TodoList';

export default class ComponentPage extends Component {
  render() {
    return (
      <div>      
        <Test name={"Kim"} job={"Developer"}></Test>
        <Counter></Counter>
        <TodoList></TodoList>
    </div>
    )
  }
}
