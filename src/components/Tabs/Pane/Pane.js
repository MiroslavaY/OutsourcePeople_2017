import React from 'react';
import './Pane.css';

export default class Pane extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
