import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';
import Band from './components/Band'



export default class App extends Component {
  constructor(){
    super();

    this.state = {};
  }
  render(){
    return (
      <Fragment>
        <Band />       
      </Fragment>
    )
  }   
}


