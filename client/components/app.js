import React from 'react';

import Banner from './banner';
import About from './about';
import Ticketing from './ticketing';
import CastList from './castList';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.params.page || 'about'
    };
  }

  navTo(page) {
    this.setState({currentPage: page});
  }

  content() {
    if (this.state.currentPage === 'about') {
      return <About/>;
    }
    if (this.state.currentPage === 'tickets') {
      return <Ticketing/>;
    }
    if (this.state.currentPage === 'cast') {
      return <CastList/>;
    }
  }

  render() {
    return (
      <div id="app">
        <Banner navTo={this.navTo.bind(this)}/>
        {this.content()}
      </div>
      )
  }
}