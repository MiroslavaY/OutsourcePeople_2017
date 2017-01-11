import React from 'react';
import './MainSpeakers.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import {speakers} from './../../../fixtures/mainSpeakers';


export default class MainSpeakers extends React.Component {
  render() {
    const mainSpeakers = speakers;
    return (
      <div>
        <Title
          text={'Ключевые спикеры'}
        />
        <div className="main-speakers">
          {
            mainSpeakers.map((speaker, i) => {
              {/* !!!!!! remove index and set name!!!!!!*/
              }
              return (
                <figure key={i} className="main-speakers--section">
                  <img
                    className="main-speakers__img"
                    src={require('./../../../fixtures/images/face.jpg')}
                    alt="International speakers"
                  />
                  <figcaption className="main-speakers--info">
                    <h4 className="main-speakers--name">{speaker.name}</h4>
                    <p>{speaker.description}</p>
                  </figcaption>
                </figure>)
            })
          }
        </div>
      </div>
    );
  }
}


