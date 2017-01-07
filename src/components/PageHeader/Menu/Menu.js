import React from 'react';
import './Menu.css';
import CallbackButton from './../../Button/Button';


export default class Menu extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="header--navigation">
        <div className="logo">
          <a>logo here</a>
        </div>
        <ul className="header--menu">
          <li><a>Место</a></li>
          <li><a>Программа</a></li>
          <li><a>Регистрация</a></li>
          <li><a>FAQ</a></li>
          <li><a>Контакты</a></li>
        </ul>
        <div className="callback">
          <p className="phone-number"> +38 068 661 79 42</p>
          <p className="phone-number"> +38 066 724 57 76</p>
          <CallbackButton
          text={'Обратный звонок'}
          handler={null}
          />
        </div>
      </nav>
    );
  }
}

