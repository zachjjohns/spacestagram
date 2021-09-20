import "./App.css";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <CardContainer />
    </div>
    )
  }
}