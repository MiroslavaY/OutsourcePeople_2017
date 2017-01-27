import React from 'react';
import './Tickets.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import Button from './../../helpersComponents/Button/Button';
import {paymentSystems} from './../../../../fixtures/payment';
import TicketsTable from './../../helpersComponents/TicketsTable/TicketsTable';
import {packages} from './../../../../fixtures/tickets';
import ModalWindow from './../../helpersComponents/ModalWindow/ModalWindow';
import Form from './../../helpersComponents/Form/Form/Form';


export default class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
    };

    this.handleModalOpening = this.handleModalOpening.bind(this);
    this.handleModalClosing = this.handleModalClosing.bind(this);
  }

  handleModalOpening() {
    this.setState({
      isModalOpened: !this.state.isModalOpened,
    });
  }

  handleModalClosing() {
    this.setState({
      isModalOpened: !this.state.isModalOpened,
    });
  }

  render() {
    return (
      <section className="tickets-section">
        <Title
          text={'Билеты'}
        />
        <TicketsTable
          packages={packages}
        />
        <div className="tickets-section__payments-systems">
          {
            paymentSystems.map((system) => <img
              className="tickets-section__payments-systems__img"
              key={system.href}
              alt="payment system"
              src={require(`./../../../../fixtures/images/${system.img}`)}
            />)
          }
        </div>
        <p className="tickets-section__common-ordering">При покупке от 2-х билетов цена ниже от 3% до 8%</p>
        <Button
          text={'Корпоративная покупка'}
          handler={this.handleModalOpening}
        />
        {
          this.state.isModalOpened && <ModalWindow closeWindow={this.handleModalClosing}>
            <Form title="Common ordering"/>
          </ModalWindow>
        }
      </section>
    );
  }
}


