import React, { Component } from 'react'

export class cfunction extends Component {
    changeEvent(){
        console.log("hlw")
    }
  render() {
    return (
      <div><button onClick={this.changeEvent}>click </button></div>
    )
  }
}

export default cfunction

