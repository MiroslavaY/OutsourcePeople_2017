import React from 'react';
import './TreeNode.css';


export default class TreeNode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: this.props.collapsed,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isCollapsed: !this.state.isCollapsed});
  }

  render() {
    const collapsed = this.state.isCollapsed;
    const {
      className = '',
      nodeLink,
      children,
    } = this.props;

    let arrowClassName = 'tree-view__arrow';
    let containerClassName = 'tree-view__children';

    if (collapsed) {
      arrowClassName += ' tree-view__arrow--collapsed';
      containerClassName += ' tree-view__children--collapsed';
    }

    const arrow = <div
      className={className + ' ' + arrowClassName}
      onClick={this.handleClick}
    />;

    return (
      <section>
        <div className="tree-view__item">
          {arrow}
          {nodeLink}
        </div>
        <div className={containerClassName}>
          {!collapsed && children}
        </div>
      </section>
    );
  }
}
