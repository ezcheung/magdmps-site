import React from 'react';

export default class Praise extends React.Component {
  constructor(props) {
    super(props);
    this.praises = [
      {
        title: "Godspell (2016)",
        ratings: ["'★★★★' - The Tab", "'the stage comes alive with energy and it is impossible not to smile'"], 
      },
      {
        title: "Joseph and the Amazing Technicolor Dreamcoat (2014)",
        ratings: ["'★★★★' - Varsity'", "'8/10' - TCS"]
      },
      {
        title: "How to Succeed in Business Without Really Trying (2013)",
        ratings: ["'★★★★' - Varsity", "'★★★★' - The Tab"]
      },
      {
        title: "Little Shop of Horrors (2012)",
        ratings: ["'★★★★' - Varsity", "'5/5' - TCS"]
      },
      {
        title: "Cabaret (2011)",
        ratings: ["'★★★★★' - Varsity"]
      }
    ]
  }

  praiseList() {
    return (
      <div id="praiseList">
        {this.praises.map((p => (
          <div className="praise">
            <h3 className="playTitle">
              {p.title}
            </h3>
            <h4 className="ratingList">
              {p.ratings.map(r => <div className="rating">{r}</div>)}
            </h4>
            {() => p.quote ? <div>{p.quote}</div> : null}
          </div>)))
        }
      </div>
      )
  }

  render() {
    return (
      <div id="praiseSection">
        <div id="praiseTitle">
          Praise for other Magdalene Musical Production Society shows:
        </div>
        {this.praiseList()}
      </div>
      )
  }
}