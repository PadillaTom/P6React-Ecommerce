import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  // Context:
  const { filtered_products: products, grid_view } = useFilterContext();

  // No Array YET:
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, No products match your search
      </h5>
    );
  }
  // LIST View:
  if (grid_view === false) {
    return <ListView products={products}></ListView>;
  }
  // GRID View:
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
