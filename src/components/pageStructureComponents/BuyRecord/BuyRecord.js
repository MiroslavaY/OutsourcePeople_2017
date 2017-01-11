import React from 'react';
import './BuyRecord.css';
import Button from './../../helpersComponents/Button/Button';
import DeadlinesAccordion from './../../helpersComponents/DeadlinesAccordion/DeadlinesAccordion';
import {records} from './../../../fixtures/recordDeadlines';


export default class BuyRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: 140,
    }
  }

  render() {
    return (
      <div className="buy-record--section">
        <h2 className="buy-record--title">Купить запись</h2>
        <div className="buy-record--buy-info">
          <p className="buy-record--current-price">&#36;{this.state.currentPrice}</p>
          <Button
            size={'large'}
            text={'Купить запись'}
            onClick={null}
          />
        </div>
        <div className="buy-record--accordion">
          <DeadlinesAccordion
            type={'records'}
            deadlines={records}
          />
        </div>

      </div>
    )
  }

}