import React from 'react';
import './CallBack.css';
import Button from './../Button/Button';
import axios from 'axios';

export default class CallBack extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      phoneForCallback: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendNumber = this.sendNumber.bind(this);
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });

  }

  sendNumber(){
  }

  render() {
    return (
      <div className="callback-wrapper">
        <img
          className="callback__logo"
          src={require('./../../../../images/callback.png')}/>
        <h2 className="callback__title">Обратный звонок</h2>
        <p className="callback__paragraph">Введите ваш номер:</p>
        <input
          onChange={this.handleInputChange}
          name="phoneForCallback"
          className="callback__input"
          type="text"
          required=""
          placeholder="+XXX XX XXX XX XX"
        />
        <Button
          handler={this.sendNumber}
          text={'Отправить'}
        />
        <p className="callback__paragraph">
          Или позвоните по номерам:
        </p>
        <p className="callback__paragraph">
          +38 068 661 79 42 <br/>
          +38 066 724 57 76
        </p>
      </div>
    );
  }
}

