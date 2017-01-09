import React from 'react';
import './TimeLineForTabs.css';

export default class TimeLine extends React.Component {
  render() {
    return (
      <div className="tabs-timeline">
        {this.props.time}
      </div>
    );
  }
}
