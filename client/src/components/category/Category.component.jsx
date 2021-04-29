import React, { useEffect } from 'react';
import CategoryCard from './sub-components/CategoryCard.component';
// import { categories } from "../../data/categories";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../redux/category/category.selectors';
import { fetchCategoriesStartAsync } from '../../redux/category/category.actions';

const Category = ({ categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
    return () => {};
  }, [fetchCategories]);

  return (
    <div className="section category">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-4">
          {categories &&
            categories
              .slice(0, 3)
              .map((category, index) => (
                <CategoryCard key={index} category={category} styleClass="small" />
              ))}
        </div>
        <div className="row row-cols-1 row-cols-md-2 mb-2">
          {categories &&
            categories
              .slice(3, 5)
              .map((category, index) => (
                <CategoryCard key={index} category={category} styleClass="large" />
              ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
