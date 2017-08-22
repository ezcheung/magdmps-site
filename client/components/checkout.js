/**
* Screen for redirect after payment
*/

import React from 'react';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="spiel">
        Your tickets have been reserved. Thank you!
      </div>
    )
  }
}