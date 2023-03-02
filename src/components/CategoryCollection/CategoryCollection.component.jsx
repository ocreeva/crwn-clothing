import CategoryItem from '../CategoryItem/CategoryItem.component';

import './CategoryCollection.styles.scss';

const CategoryCollection = ({categories}) =>
    <div className="categories-container">
        { categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        ))}
    </div>

export default CategoryCollection;
