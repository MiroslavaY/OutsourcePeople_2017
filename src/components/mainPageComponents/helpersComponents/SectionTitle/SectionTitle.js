import React from 'react';
import './SectionTitle.css';


export default class SectionTitle extends React.Component {
  render() {
    return (
      <div className="section-title">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}


