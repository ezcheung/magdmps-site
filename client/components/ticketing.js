import React from 'react';

export default class Ticketing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: '1'
    }
  }

  handleInput(event) {
    if(Number.isInteger(Number(event.target.value))) this.setState({quantity: event.target.value});
  }

  payForm() {
    return (
      <div id="payForm">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="3EDV7YQPLYB4S"/>
        <input id="ticketingTitle" type="hidden" name="on0" value="Showtimes"/>Choose a Showtime:
        <br/>
        <select name="os0">
          <option value="Tuesday (21/2) - Concession">Tuesday (21/2) - Concession</option>
          <option value="Tuesday (21/2)">Tuesday (21/2)</option>
          <option value="Wednesday (22/2) - Concession">Wednesday (22/2) - Concession</option>
          <option value="Wednesday (22/2)">Wednesday (22/2)</option>
          <option value="Thursday (23/2) - Concession">Thursday (23/2) - Concession</option>
          <option value="Thursday (23/2)">Thursday (23/2)</option>
          <option value="Friday (24/2) - Concession">Friday (24/2) - Concession</option>
          <option value="Friday (24/2)">Friday (24/2)</option>
          <option value="Saturday (25/2) - Concession">Saturday (25/2) - Concession</option>
          <option value="Saturday (25/2)">Saturday (25/2)</option>
        </select>
        <br/>
        <label>Quantity:</label>
        <input onChange={this.handleInput.bind(this)} id="quantitySelect" type="text" name="quantity" value={this.state.quantity}/>
        <br/>
        <input type="hidden" name="currency_code" value="GBP"/>
        <input className="submitBtn" type="submit" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" value="Buy Now"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
        <p className="redirectAlert">You will be redirected to PayPal for checkout</p>
      </form>
      </div>
    )
  }
//src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif"

  spiel() {
    return (
      <div id="spiel" className="ticketingSpiel">
        <p>Choose a showtime below to reserve your tickets to Anything Goes</p>
        <p>Tickets are available at full price (£8) or concession price (£5) for Camcard holders, over 60s, under 16s and Jobseekers</p>
        <p>Your name will be checked at the door to confirm your ticket purchase</p> 
        <p>Tickets will also be available at the door</p>
      </div>
    )
  }

  render() {
    return (
      <div id="ticketingPage">
        {this.spiel()}
        {this.payForm()}
      </div>
      )
  }
}