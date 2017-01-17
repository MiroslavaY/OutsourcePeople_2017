import React from 'react';
import './ScheduleContainer.css';

export default class ScheduleContainer extends React.Component {
  render() {
    return (
      <div className="schedule-container">
        {this.props.children}
      </div>
    );
  }
}
