import React from 'react';
import './ManagePanel.css';
import NavigationData from './../../../../constants/adminNavigation'
import TabContainer from './../TabContainer/TabContainer';


export default class ManagePanel extends React.Component {

  constructor(props) {
    super(props);
    this.entity = {};
    this.state = {
      entity: {},
      animated: 'admin-panel-title--animated',
    };

    this.getTitle = this.getTitle.bind(this);
  }

  componentWillMount() {
    this.getTitle(NavigationData, this.props.paramsEntity);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paramsEntity != this.props.paramsEntity) {
      this.getTitle(NavigationData, nextProps.paramsEntity);

      (this.state.animated === 'admin-panel-title--animated') ?
        this.setState({
          animated: 'admin-panel-title--new-animated',
        }) :
        this.setState({
          animated: 'admin-panel-title--animated',
        });
    }
  }


  getTitle(array, href) {
    for (let i = 0, len = array.length; i < len; i++) {
      if (array[i]['href'] === `/admin/${href}`) {
        this.setState({
          entity: array[i],
        });
      }
      else if (array[i]['childNodes']) {
        this.getTitle(array[i]['childNodes'], href);
      }
    }
  }

  render() {
    const animated = `admin-manage-panel-title ${this.state.animated}`;
    return (
      <section className="admin-manage-panel">
        <h1 className={animated}>{this.state.entity && this.state.entity.name}</h1>
        <TabContainer entity={this.state.entity}/>
      </section>
    );
  }
}
