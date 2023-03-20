import { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductsContext from "../../context/ProductsContext";

import { Fragment } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";

const ShopCategory = () => {
    const { category } = useParams();
    const { productsByCategory } = useContext(ProductsContext);

    const { items } = productsByCategory[category];

    return (<Fragment>
            <div className='products-collection'>
                { items.map(product => <ProductCard key={product.id} product={product} />) }
            </div>
        </Fragment>);
}

export default ShopCategory;
