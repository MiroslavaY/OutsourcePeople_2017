import React from 'react';
import './ModalWindow.css';


export default class ModalWindow extends React.Component {
  componentWillMount() {
    document.body.style.position = 'relative';
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.position = 'static';
    document.body.style.overflow = 'auto';
  }

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

