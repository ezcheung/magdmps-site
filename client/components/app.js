import React from 'react';

import Banner from './banner';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div id="app">
        <Banner/>
      </div>
      )
  }
}