import React from 'react';
import './PageHeader.css';
import Menu  from '../Menu/Menu';

export default class PageHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Menu/>
        <div className="header--text-description">
          <h1>Outsource people <br/> 2017 Kyiv</h1>
          <h2>Международная конференция по бизнесу <br/> на сервисной разработке ПО</h2>
          <h1>4-5 ноября</h1>
        </div>
        <div className="header--themes-section">
          <figure>
            <img src="http://www.iconarchive.com/download/i38829/google/chrome/Google-Chrome-Chromium.ico" alt="International speakers"/>
            <figcaption>Международные докладчики</figcaption>
          </figure>
          <figure>
            <img src="http://www.iconarchive.com/download/i38829/google/chrome/Google-Chrome-Chromium.ico" alt="Industry trends"/>
            <figcaption>Тренды индустрии</figcaption>
          </figure>
          <figure>
            <img src="http://www.iconarchive.com/download/i38829/google/chrome/Google-Chrome-Chromium.ico" alt="New clients"/>
            <figcaption>Новые клиенты</figcaption>
          </figure>
          <figure>
            <img src="http://www.iconarchive.com/download/i38829/google/chrome/Google-Chrome-Chromium.ico" alt="Business relations"/>
            <figcaption>Деловые связи</figcaption>
          </figure>
        </div>
      </header>
    );
  }
}


