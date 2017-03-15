import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ onButtonClick }) => (
  <form onSubmit={(event) => {
    event.preventDefault()

    let userInput = event.target.x.value

    onButtonClick(userInput)

    event.target.x.value = ''
    // this.props.dispatch(onButtonClick(userInput))
  }}>
    <input type="text" name="x"/>
    <button>Click me!</button>
  </form>
);


const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
