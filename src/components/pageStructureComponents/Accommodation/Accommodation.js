import React from 'react';
import './Accommodation.css';
import SectionTitle from './../../helpersComponents/SectionTitle/SectionTitle';
import {accommodationItems} from './../../../fixtures/accommodation';


export default class Accommodation extends React.Component {
  render() {
    const accommodation = accommodationItems;
    return (
      <div className="accommodation">
        <SectionTitle
          text={'Проживание'}
        />
        <div className="accommodation--items">
          {
            accommodation.map((el, i)=> {
              return (
                <div className="accommodation--item" key={el.name}>
                  <div className="accommodation--item--icon">{i + 1}</div>
                  <p className="accommodation--item--name">{el.name}</p>
                  <a className="accommodation--item--description" href={el.href}>Подробнее</a>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}


