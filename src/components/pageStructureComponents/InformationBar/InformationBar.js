import React from 'react';
import './InformationBar.css';


export default class InformationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#599bd5',
      info: {
        reports: 72,
        days: 2,
        companies: 300,
      }
    }
  }

  render() {
    return (
      <div className="information-bar" style={{backgroundColor: this.state.bgColor}}>
        <div>
          <span className="information-bar__amount">{this.state.info.reports}</span>
          <p className="information-bar__type">доклада</p>
        </div>
        <div>
          <span className="information-bar__amount">{this.state.info.days}</span>
          <p className="information-bar__type">дня</p>
        </div>
        <div>
          <span className="information-bar__amount">{this.state.info.companies}</span>
          <p className="information-bar__type">IT компаний</p>
        </div>
      </div>
    );
  }
}


