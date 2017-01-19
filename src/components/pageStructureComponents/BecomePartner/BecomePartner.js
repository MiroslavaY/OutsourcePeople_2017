import React from 'react';
import './BecomePartner.css';
import Button from './../../helpersComponents/Button/Button';


export default class BecamePartner extends React.Component {

  render() {
    return (
      <section className="become-partner-section">
        <h2 className="become-partner-section__title">Стать партнером</h2>
        <Button
          size={'large'}
          text={'Подать заявку'}
          onClick={null}
        />
      </section>
    );
  }
}


