import React from 'react';
import './Footer.css';
import Button from '../helpersComponents/Button/Button';
import {paymentSystems} from './../../fixtures/payment';


export default class Footer extends React.Component {

  render() {
    const payment = paymentSystems;
    return (
      <footer className="footer">
        <div className="footer--section">
          <h4 className="footer--title">Outsource people 2017</h4>
          <p className="footer--paragraph">Международная конференция по бизнесу на аутсорсинге разработки ПО</p>
          <p className="footer--paragraph">Договор публичной оферты</p>
          <p className="footer--paragraph">Организатор - агенство
            <a className="footer--link" href=""> BrightOutsource</a>
          </p>
        </div>
        <div className="footer--section">
          <h4 className="footer--title">Мы принимаем к оплате:</h4>
          {
            payment.map((el) => <div className="footer--payment-item" key={el.href}>
              <a href={el.href}>
                <img src={require(`./../../fixtures/images/${el.img}`)}/>
              </a>
            </div>)
          }
        </div>
        <div className="footer--section">
          <h4 className="footer--title">Держите меня в курсе</h4>
          <form>
            <input
              className="footer--email-input"
              type="email"
              placeholder="Email*"/>
            <Button
              text={'Сообщать об обновлениях'}
              onClick={null}
            />
          </form>
        </div>
      </footer>
    );
  }
}


