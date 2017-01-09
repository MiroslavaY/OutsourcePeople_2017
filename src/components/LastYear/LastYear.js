import React from 'react';
import './LastYear.css';


export default class LastYear extends React.Component {
  render() {
    return (
      <div className="last-year--section" style={{backgroundImage:`url(${require('./../../fixtures/images/Background.jpg')})`}}>
        <h2 className="last-year--title">Как это было <br/> в прошлом году</h2>
        <iframe className="last-year--video" src="https://www.youtube.com/embed/Sf50HHGVBzM"/>
      </div>
    );
  }
}


