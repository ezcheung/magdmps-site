import React from 'react';

export default class Ticketing extends React.Component {
  constructor(props) {
    super(props)
  }

  payForm() {
    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="3EDV7YQPLYB4S"/>
        <table>
        <tr><td><input type="hidden" name="on0" value="Showtimes"/>Showtimes</td></tr><tr><td><select name="os0">
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
        </select> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="GBP"/>
        <input className="submitBtn" type="submit" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
      </form>
    )
  }
//src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif"
  render() {
    return (
      <div id="ticketingPage">
        {this.payForm()}
      </div>
      )
  }
}