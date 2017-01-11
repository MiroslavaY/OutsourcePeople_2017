import React from 'react';
import './CategoriesInformation.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import FlowCard from './../../helpersComponents/FlowCard/FlowCard';
import {categories} from './../../../fixtures/categories';


export default class CategoriesInformation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categoriesItems: [],
    }
  }

  componentWillMount() {
    this.setState({
      categoriesItems: categories,
    });
  }

  render() {

    const categories = this.state.categoriesItems;
    return (
      <div className="categories-information">
        <Title
          text={'Информация о потоках'}
        />
        <div className="categories-wrapper">
          {
            categories.map((category)=> {
              return (
                <FlowCard
                  key={category.title}
                  category={category}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

