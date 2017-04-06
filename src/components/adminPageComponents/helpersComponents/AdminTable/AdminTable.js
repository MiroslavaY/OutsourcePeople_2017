import React from 'react';
import './AdminTable.css';
import Input from './../../../mainPageComponents/helpersComponents/Form/Input/Input';
import Headlines from './../../../../constants/adminTableColumns';


const searchSettings = {
  labelText: 'Search',
  name: 'admin-search',
  type: 'text',
  pattern: '',
  required: false,
  placeholder: 'Search',
};

/*const discussionTable = ['Тема доклада', 'Язык', 'Докладчики', 'Фото', 'Описание'];*/

const testTableData = [
  {
    theme: 'My Theme',
    language: 'russian',
    speakers: 'Ivan Ivanov',
    photo: 'photo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, totam, vel. Consequatur ex ipsum laboriosam magni, quasi quisquam soluta voluptas! Ab ad adipisci amet atque, ducimus ea exercitationem harum? Nostrum.\
    ',
  }, {
    theme: 'My Theme2',
    language: 'russian',
    speakers: 'Ivan Ivanov',
    photo: 'photo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, totam, vel. Consequatur ex ipsum laboriosam magni, quasi quisquam soluta voluptas! Ab ad adipisci amet atque, ducimus ea exercitationem harum? Nostrum.\
    ',
  }, {
    theme: 'My Theme34',
    language: 'russian',
    speakers: 'Ivan Ivanov',
    photo: 'photo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, totam, vel. Consequatur ex ipsum laboriosam magni, quasi quisquam soluta voluptas! Ab ad adipisci amet atque, ducimus ea exercitationem harum? Nostrum.\
    ',
  },
];
const available = String.fromCharCode(2714);

export default class AdminTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      tableData: [],
    };

    this.searchHandler = this.searchHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
  }


  componentWillMount() {
    this.setState({
      initialData: testTableData,
      tableData: testTableData,
    });
  }

  checkboxHandler(e) {
    if (e.target.checked) {
      e.target.parentNode.parentNode.classList.add('admin-table__tr--selected');
    }
    else {
      e.target.parentNode.parentNode.classList.remove('admin-table__tr--selected');
    }
  }

  searchHandler(e) {
    const value = e.target.value.toLowerCase();
    let filtered = [];

    if (value) {
      filtered = this.state.initialData.filter(item => {
        for (const prop in item) {
          if (item[prop].toLowerCase().includes(value)) {
            return true;
          }
        }
      })
    }
    else {
      filtered = this.state.initialData;
    }

    this.setState({
      tableData: filtered,
    })
  }

  render() {
    const headlines = Headlines[this.props.entity];
    const tableData = this.state.tableData;
    let entityProperty;
    if (tableData[0]) {
      entityProperty = Object.keys(tableData[0]);
    }
    return (
      <section>
        <section className="admin-search-section">
          <Input
            handler={this.searchHandler}
            className="admin-search--active"
            settings={searchSettings}
          />
        </section>
        <table className="admin-table">
          <thead className="admin-table__thead">
          <tr>
            <td className="admin-table__td">Select</td>
            {
              headlines.map(headline => <td className="admin-table__td" key={headline}>{headline}</td>)
            }
            <td className="admin-table__td">Actions</td>
          </tr>
          </thead>
          <tbody>
          {
            entityProperty ? tableData.map((item) => {
              return (
                <tr
                  className="admin-table__tr"
                  key={item.theme}>
                  <td className="admin-table__td">
                    <input onChange={this.checkboxHandler} className="admin-table__checkbox" type="checkbox"
                           name={item.theme}/>
                  </td>
                  {
                    entityProperty.map((property, i) => <td
                      className="admin-table__td"
                      key={i}>
                      {item[property]}
                    </td>)
                  }
                  <td className="admin-table__td">Actions here</td>
                </tr>
              )
            }) :
              <tr>
                <td className="admin-table--empty" colSpan={headlines.length + 2}>Nothing found :(</td>
              </tr>
          }
          </tbody>
        </table>
      </section>
    );
  }
}
