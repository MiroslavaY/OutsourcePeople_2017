import React from 'react';
import './Button.css';


export default class Button extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="multipurpose-button">
        <input
          type="button"
          value={this.props.text}
          onClick={this.props.handler}
        />
      </div>
    );
  }
}


