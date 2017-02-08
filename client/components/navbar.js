import React from 'react';

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="navbar">
        <button id="aboutbtn" className="btn">About</button>
        <button id="buybtn" className="btn">Get Tickets Now</button>
        <button id="castbtn" className="btn">Cast & Crew</button>
      </div>
    )
  }
}
