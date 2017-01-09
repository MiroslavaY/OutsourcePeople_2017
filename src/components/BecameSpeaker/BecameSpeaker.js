import React from 'react';
import './BecameSpeaker.css';
import Button from '../helpersComponents/Button/Button';


export default class BecameSpeaker extends React.Component {

  render() {
    return (
      <div className="became-speaker">
        <h2 className="became-speaker--title">Стать спикером</h2>
        <Button
          size={'large'}
          text={'Подать заявку'}
          onClick={null}
        />
      </div>
    );
  }
}


