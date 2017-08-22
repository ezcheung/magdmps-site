/**
* Component for the 'about' spiel
* Mostly just base JSX
*/

import React from 'react';
import Praise from './praise';

export default class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="spiel">
        <p>
        Join us aboard the SS American for a night of love, scandal and classic showtunes!
        </p>
        <p>
        The multi award-winning show with music by Cole Porter and book by PG Woodhouse is coming to the Magadelene Cripps Auditorium! Join former evangelist turned nightclub singer Reno Sweeney, debutante Hope Harcourt, stowaway Billy Crocker and second-rate gangster Moonface Martin (Public Enemy #13) on their transatlantic voyage from New York to London to find out what happens when convention goes out the porthole!
        </p>
        <Praise/>
      </div>
      )
  }
}