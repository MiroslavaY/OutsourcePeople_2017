import React from 'react';
import './Input.css';


export default class Input extends React.Component {
  render() {
    const {
      labelText,
      name,
      type,
      pattern,
      placeholder,
      required,
    } = this.props.settings;
    const className = this.props.className;
    const handler = this.props.handler;

    return (
      <label className={`input-component input-component__label ${className}`}>
        {labelText}
        { type === 'textarea' ?
          <textarea
            pattern={pattern ? pattern : null}
            name={name}
            placeholder={placeholder}
            required={required ? required : false}
          /> :
          <input
            onChange={handler}
            type={type}
            pattern={pattern ? pattern : null}
            name={name}
            placeholder={placeholder}
            required={required ? required : false}
          />
        }
        <span className="input-hint">This is required field</span>
      </label>
    );
  }
}

