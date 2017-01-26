import React from 'react';
import './Menu.css';
import CallbackButton from './../../helpersComponents/Button/Button';
import ModalWindow from './../../helpersComponents/ModalWindow/ModalWindow';
import CallBack from './../../helpersComponents/CallBack/CallBack';


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false,
      isCallBackModalOpened: false,
    };

    this.openCallBackModal = this.openCallBackModal.bind(this);
    this.closeCallBackModal = this.closeCallBackModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    });
  }

  openCallBackModal() {
    this.setState({
      isCallBackModalOpened: true,
    });
  }

  closeCallBackModal() {
    this.setState({
      isCallBackModalOpened: false,
    });
  }

  render() {
    return (
        <nav className="page-header-navigation">
          <div className="logo">
            <h3 className="logo__text">
              Outsource <br/>
              <span className="logo__span">people 2017</span>
            </h3>
            <span className="logo__bottom-text">International IT business conference</span>
          </div>
          <div className="icon">
            <a onClick={this.toggleMenu}>☰</a>
          </div>
          <ul className={this.state.isMenuOpened ? 'header-menu responsive' : 'header-menu'}>
            <li><a>Место</a></li>
            <li><a>Программа</a></li>
            <li><a>Регистрация</a></li>
            <li><a>FAQ</a></li>
            <li><a>Контакты</a></li>
            <li className="callback">
              <p className="language">
                <a src="/en" className="language__link--active">
                  <img alt="English language" src={require('./../../../../fixtures/images/English.jpg')}/>
                  &nbsp; EN
                </a>
                <a src="/ru">
                  <img alt="Russian language" src={require('./../../../../fixtures/images/English.jpg')}/>
                  &nbsp; RU
                </a>
              </p>
              <p className="header__phone-number"> +38 068 661 79 42</p>
              <p className="header__phone-number"> +38 066 724 57 76</p>
              <CallbackButton
                text={'Обратный звонок'}
                handler={this.openCallBackModal}
              />
            </li>
          </ul>
          {
            this.state.isCallBackModalOpened ? <ModalWindow closeWindow={this.closeCallBackModal}>
              <CallBack/>
            </ModalWindow> :
              null
          }
        </nav>

    );
  }
}

