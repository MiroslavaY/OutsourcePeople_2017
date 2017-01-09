import React from 'react';
import './CategoriesInformation.css';
import Title from '../helpersComponents/SectionTitle/SectionTitle';
import {categories} from './../../fixtures/categories';


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
            categories.map((el)=> {
              return (
                <figure className="category" key={el.title}>
                  <img src={require('./../../fixtures/images/category.jpg')}/>
                  <figcaption className="category--info">
                    <h3
                      className="category--title"
                      style={{backgroundColor: el.color}}
                    >
                      {el.title}
                    </h3>
                    <p className='category--description'>{el.description}</p>
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
      </div>
    );
  }
}

