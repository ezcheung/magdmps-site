import React from 'react';

import Banner from './banner';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.params.page || 'about'
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