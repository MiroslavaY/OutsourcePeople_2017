import React from 'react';
import './BecamePartner.css';
import Button from '../helpersComponents/Button/Button';


export default class BecamePartner extends React.Component {

  render() {
    return (
      <div className="became-partner">
        <h2 className="became-partner--title">Стать партнером</h2>
        <Button
          size={'large'}
          text={'Подать заявку'}
          onClick={null}
        />
      </div>
    );
  }
}


