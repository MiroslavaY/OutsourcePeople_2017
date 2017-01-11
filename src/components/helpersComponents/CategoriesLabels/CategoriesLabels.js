import React from 'react';
import './CategoriesLabels.css';


export default class CategoriesLabels extends React.Component {
  render() {
   const categories = this.props.categories;
    return (
      <div className="categories-labels--wrapper">
        {
          categories.map((el)=>{
            return(
              <div className="category-label" key={el.title}>
                <h3 className="category-label--name" style={{backgroundColor: el.color}}>{el.title}</h3>
                <p className="category-label--location">{el.location}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}


