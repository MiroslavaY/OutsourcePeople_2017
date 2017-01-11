import React from 'react';
import './BecomePartner.css';
import Button from './../../helpersComponents/Button/Button';


export default class BecamePartner extends React.Component {

  render() {
    return (
      <div className="become-partner">
        <h2 className="become-partner--title">Стать партнером</h2>
        <Button
          size={'large'}
          text={'Подать заявку'}
          onClick={null}
        />
      </div>
    );
  }
}


