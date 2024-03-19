import React, { Component } from 'react'
import loader1 from './loader1.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img  style={{width: "5rem"}} src={loader1} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
