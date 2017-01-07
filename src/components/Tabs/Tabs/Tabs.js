import React from 'react';
import './Tabs.css';


export default class Tabs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderTitles = this.renderTitles.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  handleClick(index, e) {
    e.preventDefault();
    this.setState({
      selected: index
    });
  }

  renderTitles() {
    const labels = (child, index)=> {
      const activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href="#"
             className={activeClass}
             onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    };

    return (
      <ul className="tabs--labels">
        {this.props.children.map(labels)}
      </ul>
    );
  }

  renderContent() {
    const selected= this.state.selected;
    return (
      <div className="tabs--content">
        {this.props.children[selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  }
}


