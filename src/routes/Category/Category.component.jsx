import { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductsContext from "../../context/ProductsContext";

const Category = () => {
    const { category } = useParams();
    const { productsByCategory } = useContext(ProductsContext);

    const { title, items } = productsByCategory[category];

    return (<div className='category'>{category}</div>);
}

export default Category;
