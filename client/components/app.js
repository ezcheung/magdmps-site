/**
* The head component that is rendered on the page,
* using the URL 'page' parameter to decide which components to render
*/

import React from 'react';

import Banner from './banner';
import About from './about';
import Ticketing from './ticketing';
import CastList from './castList';
import Checkout from './checkout';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // Defaults to 'about' if no page is given in the URL
      currentPage: this.props.params.page || 'about'
    };
  }

  /**
  * Function for switching pages, to be passed down to the navbar
  */

  navTo(page) {
    this.setState({currentPage: page});
  }

  /**
  * Picks a component to render based on the currentPage variable
  */
  
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
    if (this.state.currentPage === 'checkout') {
      return <Checkout/>;
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