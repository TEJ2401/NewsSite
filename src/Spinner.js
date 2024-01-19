import React, { Component } from 'react'

import Spinn from './Spin.gif'
export class Spinner extends Component {
  

  render() {
    return (
      <div>
        <img src={Spinn} alt='loading'></img>
      </div>
    )
  }
}

export default Spinner
