import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../Componants/ProductList";

const CategoryPage = () => {
  const { categoryName } = useParams();
  return <ProductList category={decodeURIComponent(categoryName)} />;
};

export default CategoryPage;