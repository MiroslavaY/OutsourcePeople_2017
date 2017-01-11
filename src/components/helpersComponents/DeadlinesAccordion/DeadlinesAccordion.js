import React from 'react';
import './DeadlinesAccordion.css';


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
    const isRecordDeadlines = this.props.type === 'records';

    return (
      <div className="deadlines-accordion--for-records">
        <h3 className="deadlines-accordion--title" onClick={this.handleToggle}>
          Все сроки
          <span>{this.state.isActive ? String.fromCharCode(9650) : String.fromCharCode(9660)}</span></h3>
        <div className={this.state.isActive ? 'accordion-opened' : 'accordion-closed'}>
          <table className="accordion--table">
            {
              isRecordDeadlines && <thead className="accordion--table--head">
              <tr>
                {
                  keys.map((headline) => <td key={headline}>{headline.replace(/_/g, ' ')}</td>)
                }
              </tr>
              </thead>
            }
            <tbody>
            {/*!!!!!!! remove indexes!!!!!!!*/}
            {
              deadlinesData.map((el, i)=> {
                return (
                  <tr key={i}>
                    {
                      keys.map((property) => <td key={property}>{el[property]}</td>)
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