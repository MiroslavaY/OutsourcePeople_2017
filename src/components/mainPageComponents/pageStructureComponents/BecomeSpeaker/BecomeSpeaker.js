import React from 'react';
import './BecomeSpeaker.css';
import Button from './../../helpersComponents/Button/Button';


export default class BecameSpeaker extends React.Component {

  render() {
    return (
      <section className="become-speaker-section">
        <h2 className="become-speaker-section__title">Стать спикером</h2>
        <Button
          size={'large'}
          text={'Подать заявку'}
          onClick={null}
        />
      </section>
    );
  }
}


