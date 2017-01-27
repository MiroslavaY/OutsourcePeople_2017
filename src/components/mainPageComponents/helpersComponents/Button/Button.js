import React from 'react';
import './Button.css';

const sizeClasses = {
  'large': 'multipurpose-button--large',
  'small': 'multipurpose-button--small',
  'extra-small': 'multipurpose-button--extra-small',
};

export default class Button extends React.Component {
  render() {
    return (
      <div className="multipurpose-button">
        <input
          className={`multipurpose-button__input ${this.props.size ? sizeClasses[this.props.size] : 'multipurpose-button--small'}`}
          type={this.props.type ? this.props.type : 'button'}
          value={this.props.text}
          onClick={this.props.handler}
        />
      </div>
    );
  }
}


