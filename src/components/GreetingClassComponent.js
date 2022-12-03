
import React, { Component } from 'react'

export class greetingClassComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      text:'Hello World ',
      name:this.props.name
    }
  }

  changetext(){
    this.setState({text:'Hello ' + this.state.name})
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>

        <button onClick={()=>this.changetext()}>Change Text</button>
      </div>
    )
  }
}

export default greetingClassComponent
