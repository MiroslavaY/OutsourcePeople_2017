import React from 'react';
import './Button.css';


export default class Button extends React.Component {
  render() {
    return (
      <div className="multipurpose-button">
        <input
          className={this.props.size ? this.props.size : 'small'}
          type="button"
          value={this.props.text}
          onClick={this.props.handler}
        />
      </div>
    );
  }
}


