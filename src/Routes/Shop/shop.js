import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../Categories-Preview/categories-preview";
import Category from "../Category/category";

import "./shop.styles.scss";

const Shop = () => {
  
  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
