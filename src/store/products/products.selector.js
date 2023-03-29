import { createSelector } from "reselect";

const getProductsData = ({ products }) => products;
const getCategories = createSelector(
    [ getProductsData ],
    ({ categories }) => {
        console.log("getCategories: ", categories);
        return categories;
    }
);
const getCategoriesMap = createSelector(
    [ getCategories ],
    (categories) => categories.reduce(
        (map, category) => {
            map[category.title.toLowerCase()] = category;
            return map;
        },
        {})
);
const getProductsMap = createSelector(
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
