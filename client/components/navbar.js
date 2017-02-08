import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="navbar">
        <a href="/#/" onClick={() => this.props.navTo('about')} id="aboutbtn" className="btn">About</a>
        <a href="/#/tickets" onClick={() => this.props.navTo('tickets')} id="buybtn" className="btn">Get Tickets Now</a>
        <a href="/#/cast" onClick={() => this.props.navTo('cast')} id="castbtn" className="btn">Cast & Crew</a>
      </div>
    )
  }
}
