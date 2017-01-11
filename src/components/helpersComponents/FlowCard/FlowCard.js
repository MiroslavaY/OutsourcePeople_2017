import React from 'react';
import './FlowCard.css';


export default class FlowCard extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <div className="flow-card">
        <div className="flow-card--header">
          <img
            className="flow-card__img"
            src={require(`./../../../images/${category.img}`)}
            alt={category.title}
          />
          <h3 className="flow-card--title">{category.title}</h3>
        </div>
        <p className="flow-card--content">
          {category.info}
        </p>
        <div className="flow-card--moderator">
        <h3 className="flow-card--moderator-title">Модератор:</h3>
          <div className="flow-card--moderator-info">
            <img
              className="flow-card__moderator-img"
              alt={category.moderator.name}
              src={require(`./../../../images/${category.moderator.img}`)}
            />
            <p className="flow-card--moderator-contacts">
              {category.moderator.name} <br/>
              {category.moderator.email} <br/>
              <img
                className="flow-card__skype-icon"
                alt="skype"
                src={require(`./../../../images/skype.png`)}
              />
              {category.moderator.skype}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
