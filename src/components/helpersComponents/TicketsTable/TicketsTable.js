import React from 'react';
import './TicketsTable.css';
import DeadlinesAccordion from './../DeadlinesAccordion/DeadlinesAccordion';
import {ticketsDeadlines} from './../../../fixtures/recordDeadlines';
import Button from './../Button/Button';


export default class TicketsTable extends React.Component {
  render() {
    const packages = this.props.packages;
    const headlines = packages[0].packagesSupport.map((pack) => pack.title);
    return (
      <div className="table-container">
        <table className="tickets-table">
          <thead>
          <tr className="tickets-table__row">
            <td/>
            {
              headlines.map((headline) => <td className="tickets-table__title" key={headline}>{headline}</td>)
            }
          </tr>
          </thead>
          <tbody className="tickets-table__body">
          {
            packages.map((el) => {
              return (
                <tr className="tickets-table__row" key={el.service}>
                  <td className="tickets-table__cell"> {el.service}</td>
                  {
                    el.packagesSupport.map((pack, i) => {
                        return pack.title === headlines[i] ? <td
                          key={i}
                          className={`tickets-table__cell ${pack.isSupported ? 'tickets-table__cell--available' : 'tickets-table__cell--unavailable'}`}
                        /> :
                          null
                      }
                    )
                  }
                </tr>
              )
            })
          }
          <tr className="tickets-table__row">
            <td
              className="tickets-table__cell--accordion"
              colSpan={headlines.length + 1}
            >
              <DeadlinesAccordion
                type={'tickets'}
                deadlines={ticketsDeadlines}
              />
            </td>
          </tr>
          <tr className="tickets-table__row">
            <td className="tickets-table__cell"/>
            {
              headlines.map((element) => {
                  return (
                    <td
                      className="tickets-table__cell"
                      key={element}>
                      <Button
                        size={'extra-small'}
                        text={'Регистрация'}
                        handler={null}/>
                    </td>)
                }
              )
            }
          </tr>
          </tbody>
        </table>
      </div>

    );
  }
}
