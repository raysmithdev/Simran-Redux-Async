import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        {this.props.isLoading ? <p>Loading...</p> : this.props.data.map((item, index) => (
          <p key={index}>{item.gender}</p>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchData())
})

const mapStateToProps = (state) => ({
  isLoading: state.api.loading,
  data: state.api.data
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
