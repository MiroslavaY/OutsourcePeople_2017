import React from 'react';
import './NavigationTree.css';
import {Link} from  'react-router';
import TreeNode from './../TreeNode/TreeNode';


export default class NavigationTree extends React.Component {

  constructor(props) {
    super(props);
    this.renderTree = this.renderTree.bind(this);
  }

  renderTree(treeData) {
    return (
      <div className="navigation-tree">
        {treeData.map((node) => {
          const link = <Link className="node" to={node.href}> {node.name} </Link>;
          const hasNestedChildren = node['childNodes'];
          return (
            <TreeNode
              key={node.href}
              nodeLink={link}
              collapsed={node.collapsed}
              className={hasNestedChildren ? '' : 'tree-view__arrow--no-nested-elements'}>
              {hasNestedChildren ? this.renderTree(node.childNodes) : null}
            </TreeNode>
          );
        })}
      </div>
    )
  }

  render() {
    return (
      <nav className="navigation-tree-links">
        {this.renderTree(this.props.treeData)}
      </nav>
    );
  }
}
