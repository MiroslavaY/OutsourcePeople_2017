import React from 'react';
import './MeetingsContainer.css';

export default class MeetingsContainer extends React.Component {
  render() {
    return (
      <div className="meeting-container">
        {this.props.children}
      </div>
    );
  }
}
