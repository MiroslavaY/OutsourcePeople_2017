import React from 'react';
import './ModalPersonCard.css';
import Button from './../../helpersComponents/Button/Button';


const categories = [{
  title: 'business strategy',
  color: '#ed1b24',
}, {
  title: 'sales & marketing',
  color: '#0876cb',
},];

const time = ['10:10', '11:00', '12:20', '13:40', '12:40'];

export default class ModalPersonCard extends React.Component {
  render() {
    const person = this.props.person;
    return (
      <div className="modal-card">
        <div className="modal-speaker-info">
          <figure className="modal-speaker">
            <div className="modal-card__photos">
              <img
                className="modal-card__speaker-img"
                src={require(`./../../../../fixtures/images/${person.img}`)}
                alt='speaker'
              />
              <img
                className="modal-card__country-img"
                src={require(`./../../../../fixtures/images/${person.countryImg}`)}
                alt="county"
              />
            </div>
            <figcaption className="modal-speaker__description">
              <h4>{person.name}</h4>
              <p className="modal-card__career">{person.position}@{person.company}</p>
              <p className="modal-card__theme">{person.speech.theme}</p>
            </figcaption>
          </figure>
        </div>
        <div className="modal-time">
          <div className="modal-time__time">
            {
              time.map((time) => {
                return (
                  <div
                    key={time}
                    className={`modal-time__time-element ${time === '10:10' ? 'modal-time__time-element--current' : ''}`}
                  >
                    {time}
                  </div>
                )
              })
            }
          </div>
          <div className="modal-time__categories">
            {
              categories.map((category) => {
                return (
                  <div
                    key={category.title}
                    className="modal-card__category"
                    style={{color: category.color}}
                  >
                    {category.title}
                    <p
                      className={person.category === category.title ? 'modal-category__arrow-up' : ''}
                      style={{borderBottomColor: category.color}}
                    >

                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="modal-info">
          <h3 className="modal-card__title">Info</h3>
          <p className="modal-card__paragraph">
            {person.speech.info}
          </p>
          <Button
            text={'Buy ticket'}
            onClick={null}
            size={'large'}
          />
        </div>
        <div className="modal-report">
          <h3 className="modal-card__title">Report</h3>
          <p className="modal-card__paragraph">
            {person.speech.report}
          </p>
        </div>
      </div>
    );
  }
}

