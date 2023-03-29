import { createSelector } from "reselect";

const getCategories = ({ products }) => products.categories;
const getCategoriesMap = createSelector(
    [ getCategories ],
    (categories) => categories.reduce(
        (map, category) => {
            map[category.title.toLowerCase()] = category;
            return map;
        },
        {})
);

export const getProductsMap = createSelector(
    [ getCategories ],
    (categories) => categories.reduce(
        (map, { items }) => {
            items.forEach(item => map[item.id] = item);
            return map;
        },
        {})
);

export const getCategoryIds = createSelector(
    [ getCategoriesMap ],
    (categoriesMap) => Object.keys(categoriesMap)
);

export const getCategoryById = (id) => createSelector(
    [ getCategoriesMap ],
    (categoriesMap) => categoriesMap[id]
);

export const getProductById = (id) => createSelector(
    [ getProductsMap ],
    (productsMap) => productsMap[id]
);
