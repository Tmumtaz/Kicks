import { ProductContext } from "../../Contexts/products-context";
import { useContext } from "react";
import ProductCard from "../../Components/product-card/product-card";
import './shop.styles.scss'

const Shop = () => {
    const {products} = useContext(ProductContext)
    return(
        <div className="products-container">
           {products.map((product) => (
            <ProductCard key={product.id} product={product} />
           ))}
        </div>
    )
}

export default Shop;