import React from 'react';

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="navbar">
        <a href="/#/" id="aboutbtn" className="btn">About</a>
        <a href="/#/tickets" id="buybtn" className="btn">Get Tickets Now</a>
        <a href="/#/cast" id="castbtn" className="btn">Cast & Crew</a>
      </div>
    )
  }
}
