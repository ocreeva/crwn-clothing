import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.component";

import './CategoryPreview.styles.scss';

const CategoryPreview = ({ id, category }) => {
    const { title, items } = category;

    return (
        <div className='category-preview'>
            <h2>
                <Link className='title' to={`/shop/${id}`}>{title}</Link>
            </h2>
            <div className='preview'>
                { items.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default CategoryPreview;
