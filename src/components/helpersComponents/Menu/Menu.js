import React from 'react';
import './Menu.css';
import CallbackButton from '../../helpersComponents/Button/Button';


export default class Menu extends React.Component {
  render() {
    return (
      <nav className="header--navigation">
        <div className="logo">
          <h3 className="logo-text">
            Outsource <br/>
            <span className="logo__span">people 2017</span>
          </h3>
          <span className="logo-bottom-text">International IT business conference</span>
        </div>
        <ul className="header--menu">
          <li><a>Место</a></li>
          <li><a>Программа</a></li>
          <li><a>Регистрация</a></li>
          <li><a>FAQ</a></li>
          <li><a>Контакты</a></li>
        </ul>
        <div className="callback">
          <p className="language">
            <a src="/en" className="language-link__active">
              <img alt="English language" src={require('./../../../fixtures/images/English.jpg')}/>
              &nbsp; EN
            </a>
            <a src="/ru">
              <img alt="Russian language" src={require('./../../../fixtures/images/English.jpg')}/>
              &nbsp; RU
            </a>
          </p>
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

