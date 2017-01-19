import React from 'react';
import './Header.css';
import Menu  from '../../helpersComponents/Menu/Menu';


const themes = [
  {
    name: 'Международные докладчики',
    img: 'earth.png',
  }, {
    name: 'Тренды индустрии',
    img: 'trends.png',
  }, {
    name: 'Новые клиенты',
    img: 'clients.png',
  }, {
    name: 'Деловые связи',
    img: 'business-relations.png',
  },
];


export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Menu/>
        <div className="header-content">
          <h1 className="header-text-description--large">Outsource people <br/> 2017 Kyiv</h1>
          <h2 className="header-text-description--medium">
            Международная конференция по бизнесу <br/>
            по сервисной разработке ПО</h2>
          <h1 className="header-text-description--large">4-5 ноября</h1>
          <div className="header-themes-section">
            {
              themes.map((theme) => {
                return (
                  <figure key={theme.name} className="header-theme">
                    <img src={require(`./../../../images/${theme.img}`)} alt={theme.name}/>
                    <figcaption className="header-theme__caption">{theme.name}</figcaption>
                  </figure>
                )
              })
            }
          </div>
        </div>
      </header>
    );
  }
}


