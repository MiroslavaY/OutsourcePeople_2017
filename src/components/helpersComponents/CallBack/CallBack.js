import React from 'react';
import './CallBack.css';
import Button from './../Button/Button';


export default class CallBack extends React.Component {
  render() {
    return (
      <div className="callback-wrapper">
        <img
          className="callback__logo"
          src={require('./../../../images/callback.png')}/>
        <h2 className="callback__title">Обратный звонок</h2>
        <p className="callback__paragraph">Введите ваш номер:</p>
        <input
          className="callback__input"
          type="text"
          required=""
          placeholder="+XXX XX XXX XX XX"
        />
        <Button
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

