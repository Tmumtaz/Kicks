import './categories-preview.styles.scss'


import { CategoriesContext } from '../../Contexts/categories-context';
import { useContext } from "react";


import CategoryPreview from '../../Components/category-preview/category-preview';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
};

export default CategoriesPreview;
