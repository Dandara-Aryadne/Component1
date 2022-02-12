import React, { Component } from "react";
class Nome2 extends Component {
  render() {
    return (
      <div>
        <h1>Estudo</h1>
      </div>
    );
  }
}

export default class Teste extends Component {
  render() {
    return (
      <div>
        <Nome2 />
        <p>Teste</p>
      </div>
    );
  }
}
