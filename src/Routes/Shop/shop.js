import { CategoriesContext } from "../../Contexts/categories-context";
import { useContext } from "react";
import ProductCard from "../../Components/product-card/product-card";
import "./shop.styles.scss";
import { Fragment } from "react";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};


export default Shop;
