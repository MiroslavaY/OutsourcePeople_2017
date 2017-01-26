import React from 'react';
import './FlowCard.css';


export default class FlowCard extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <div className="flow-card">
        <div className="flow-card-header">
          <img
            className="flow-card-header__img"
            src={require(`./../../../../images/${category.img}`)}
            alt={category.service}
          />
          <h3 className="flow-card-header__title">{category.title}</h3>
        </div>
        <p className="flow-card-content">
          {category.info}
        </p>
        <div className="flow-card-content__moderator">
          <h3 className="flow-card-content__moderator-title">Модератор:</h3>
          <div className="flow-card-content__moderator-info">
            <img
              className="flow-card-content__moderator-img"
              alt={category.moderator.name}
              src={require(`./../../../../images/${category.moderator.img}`)}
            />
            <p className="flow-card-content__moderator-contacts">
              {category.moderator.name} <br/>
              {category.moderator.email} <br/>
              <img
                className="skype-icon"
                alt="skype"
                src={require(`./../../../../images/skype.png`)}
              />
              {category.moderator.skype}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
