import React from 'react';
import './ModalWindow.css';


export default class ModalWindow extends React.Component {
  render() {
    return (
      <div className="modal-window">
        <div className="modal-content">
          <div
            onClick={this.props.closeWindow}
            className="close"
          >
            &times;
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

