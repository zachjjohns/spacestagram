import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { getAPOD } from "../../apiCalls";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apods: [],
      error: "",
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    try {
      const apods = await getAPOD();
      this.setState({ apods: apods, isLoading: false });
    } catch (e) {
      this.setState({ error: "Oops! Failed to get NASA/APOD data." });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isLoading && <h2 className="load-msg">Loading...</h2>}
        <Main apods={this.state.apods} />
      </div>
    );
  }
}
