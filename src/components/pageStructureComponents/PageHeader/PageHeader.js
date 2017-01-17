import React from 'react';
import './PageHeader.css';
import Menu  from '../../helpersComponents/Menu/Menu';

export default class PageHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <Menu/>
        <h1 className="header-text-description--large">Outsource people <br/> 2017 Kyiv</h1>
        <h2 className="header-text-description--medium">Международная конференция по бизнесу <br/> на сервисной
          разработке ПО</h2>
        <h1 className="header-text-description--large">4-5 ноября</h1>
        <div className="header-themes-section">
          <figure className="header-theme">
            <img src={require('./../../../images/earth.png')} alt="International speakers"/>
            <figcaption className="header-theme__caption">Международные докладчики</figcaption>
          </figure>
          <figure className="header-theme">
            <img className="header-theme__img" src={require('./../../../images/earth.png')} alt="Industry trends"/>
            <figcaption className="header-theme__caption">Тренды индустрии</figcaption>
          </figure>
          <figure className="header-theme">
            <img className="header-theme__img" src={require('./../../../images/earth.png')} alt="New clients"/>
            <figcaption className="header-theme__caption">Новые клиенты</figcaption>
          </figure>
          <figure className="header-theme">
            <img className="header-theme__img" src={require('./../../../images/earth.png')} alt="Business relations"/>
            <figcaption className="header-theme__caption">Деловые связи</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}


