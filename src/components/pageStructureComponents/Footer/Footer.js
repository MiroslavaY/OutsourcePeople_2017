import React from 'react';
import './Footer.css';
import Button from './../../helpersComponents/Button/Button';
import {paymentSystems} from './../../../fixtures/payment';

export default class Footer extends React.Component {

  render() {
    const payment = paymentSystems;
    return (
      <div className="footer-section">
        <div className="footer-section__group">
          <h4 className="footer-section__title">Outsource people 2017</h4>
          <p className="footer-section__paragraph">Международная конференция по бизнесу на аутсорсинге разработки ПО</p>
          <p className="footer-section__paragraph">Договор публичной оферты</p>
          <p className="footer-section__paragraph">Организатор - агенство
            <a className="footer__link" href=""> BrightOutsource</a>
          </p>
        </div>
        <div className="footer-section__group">
          <h4 className="footer-section__title">Мы принимаем к оплате:</h4>
          {
            payment.map((el) => {
              return (
                <a
                  className="footer-section__payment-item"
                  key={el.href}
                  href={el.href}>
                  <img alt="payment system" src={require(`./../../../fixtures/images/${el.img}`)}/>
                </a>
              )
            })
          }
        </div>
        <div className="footer-section__group">
          <h4 className="footer-section__title">Держите меня в курсе</h4>
          <form>
            <input
              className="footer-section__email-input"
              type="email"
              placeholder="Email*"/>
            <Button
              text={'Сообщать об обновлениях'}
              onClick={null}
            />
          </form>
        </div>
      </div>
    );
  }
}


