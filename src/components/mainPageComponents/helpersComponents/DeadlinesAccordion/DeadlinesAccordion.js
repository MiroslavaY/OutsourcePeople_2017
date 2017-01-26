import React from 'react';
import './DeadlinesAccordion.css';

const classPicker = {
  title: (type) => `deadlines-title--for-${type}`,
  accordionType: (type) => `deadlines-accordion--for-${type} `,
  tableRow: (type) => `accordion-table__tr--for-${type}`,
  tableData: (type) => `accordion-table__td--for-${type}`,
};


export default class DeadlinesAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    const deadlinesData = this.props.deadlines;
    const keys = Object.keys(this.props.deadlines[0]);
    const accordionType = this.props.type;
    return (
      <div className={`deadlines-accordion ${classPicker.accordionType(accordionType)}`}>
        <h3 className={`deadlines-accordion-title ${classPicker.title(accordionType)}`} onClick={this.handleToggle}>
          Все сроки
          <span
            className={this.state.isActive ?
              'deadlines-accordion-title__triangle--closed' :
              'deadlines-accordion-title__triangle--opened'}
          />
        </h3>
        <div className={this.state.isActive ? 'accordion-opened' : 'accordion-closed'}>
          <table className="accordion-table">
            {
              accordionType === 'records' && <thead className="accordion-thead">
              <tr className={`accordion-table__tr ${classPicker.tableRow(accordionType)}`}>
                {
                  keys.map((headline) => <td
                    className={classPicker.tableData(accordionType)}
                    key={headline}>
                    {headline.replace(/_/g, ' ')}
                  </td>)
                }
              </tr>
              </thead>
            }
            <tbody className="accordion-tbody">
            {/*!!!!!!! remove indexes!!!!!!!*/}
            {
              deadlinesData.map((el, i)=> {
                return (
                  <tr className={`accordion-table__tr ${classPicker.tableRow(accordionType)}`} key={i}>
                    {
                      keys.map((property) => {
                        return (
                          <td
                            className={classPicker.tableData(accordionType)}
                            key={property}
                          >
                            {el[property]}
                          </td>
                        )
                      })
                    }
                  </tr>)
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}