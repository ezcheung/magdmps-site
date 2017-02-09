import React from 'react';

export default class CastList extends React.Component {
  constructor(props) {
    super(props);

    this.cast = `Billy Crocker - Adam Long
Moonface Martin - Alex Franklin
Reno Sweeney - Martha Cook
Hope Harcourt - Ruth Warner
Sir Evelyn Oakleigh - Luke Dell
Mrs. Harcourt - Becky Shepherdson
Elisha Whitney - Joe Pieri
Captain - Freddie Raymond
Purser - Sam Ashbridge
Steward - Anna Culkin
Purity - Maddy Cummins
Bishop Dobson - Ollie Hayes
Reporter - Kasia Ruszkowski
Cameraman - Katie Wickham
Gambler - Anna Smith
Sailor - Arthur Lee, Theo Heymann
Bonnie - Charlotte Guerry
Gambler - Michelle Spielberg
Chastity - Katie McCoshan
Charity - Julia Hubo
Virtue - Ellen Harris`.split('\n');

    this.band = 
    `Keys 1 - Joanna Cheng
Keys 2 - Michael Cullen
Bass - Sam Brown
Bass Dep - Hazel Ford
Guitar - Max Goodall
Reed I - Will Reis
Reed II - Sam Kirby
Trumpet - Sally Jenkinson
Trombone - Ewan Day-Collins, Max Wilkinson
Percussion - Kevin Heffernan`.split('\n');

    this.team = `Director - Lily Burge
Musical Director - Joanna Cheng
Executive Producer - Rosie Causer
Producer - Gabriel Humphreys
Choreographer - Anna Smith
Set Designer - Samantha Ruston
Assistant Musical Director - Michael Cullen
Costume Designer - Beth Forsyth
Lighting Designer - Daniel Lawson
Publicity Designer - Eliza Le Roy-Lewis`.split('\n');

  }

  makeList(arr, title) {
    return (
      <div className="list">
        <h3 className="listTitle">{title}</h3>
        {arr.map((p, i) => 
          <div className='listMember' key={i}>
            <strong className='role'>{p.split('-')[0]}</strong>
            <p className='member'>{'- ' + p.split(' -')[1]}</p>
          </div>
        )}
      </div>
      )
  }

  render() {
    return (
      <div id="peopleLists">
        {this.makeList(this.cast, "Cast")}
        {this.makeList(this.band, "Band")}
        {this.makeList(this.team, "Production Team")}
      </div>
    )
  }
}