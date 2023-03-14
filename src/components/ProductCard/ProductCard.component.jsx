import Button from '../Button/Button.component';

import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;

    return (
        <div className='product-card'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type='inverted'>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;
