import "./App.css";
import React, { Component } from 'react'
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import {getAPOD} from '../../apiCalls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apods: [],
      error: "",
    }
  }
  
  componentDidMount = async () => {
    try {
      const apods = await getAPOD();
      this.setState({apods: apods});
      } catch (e) {
        this.setState({error: "Oops! Failed to get NASA/APOD data."})
      }
  }
  
  render() {
    return (
    <div className="App">
      <Header />
      <CardContainer />
    </div>
    )
  }
}