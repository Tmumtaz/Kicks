import { Link } from 'react-router-dom';
import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card';

const CategoryPreview = ({ title, products }) => {
    return(
        <div className='category-preview-container'>
            <h2>
                <Link to={title} className='category-title'>{title.toUpperCase()}</Link>
            </h2>
            <div className='product-preview'>
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => 
                    <ProductCard key={product.id} product={product} /> 
                    )
                }
            </div>
        </div>
    )
}


export default CategoryPreview;