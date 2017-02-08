import React from 'react';

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="navbar">
        <button id="aboutbtn">About</button>
        <button id="buybtn">Get Tickets</button>
        <button id="castbtn">Cast & Crew</button>
      </div>
    )
  }
}
