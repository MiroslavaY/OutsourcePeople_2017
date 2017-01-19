import React from 'react';
import './MainSpeakers.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import {speakers} from './../../../fixtures/mainSpeakers';


export default class MainSpeakers extends React.Component {
  render() {
    const mainSpeakers = speakers;
    return (
      <section className="main-speakers-section">
        <Title
          text={'Ключевые спикеры'}
        />
        <div className="main-speakers">
          {
            mainSpeakers.map((speaker, i) => {
              {/* !!!!!! remove index and set name!!!!!!*/
              }
              return (
                <figure key={i} className="main-speaker">
                  <img
                    className="main-speaker__img"
                    src={require('./../../../fixtures/images/face.jpg')}
                    alt="International speakers"
                  />
                  <figcaption className="main-speaker__info">
                    <h4 className="main-speaker__name">{speaker.name}</h4>
                    <p>{speaker.description}</p>
                  </figcaption>
                </figure>)
            })
          }
        </div>
      </section>
    );
  }
}


