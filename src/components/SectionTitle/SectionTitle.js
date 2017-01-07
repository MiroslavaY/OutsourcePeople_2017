import React from 'react';
import './SectionTitle.css';


export default class SectionTitle extends React.Component {
  render() {
    return (
      <div className="section-title">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}


