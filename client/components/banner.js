/**
* Banner to be rendered on all pages, above the content
*/

import React from 'react';
import Navbar from './navbar';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="banner">
        <h1 id="bigTitle">Anything Goes</h1>
        <Navbar navTo={this.props.navTo}/>
      </div>
    )
  }
}