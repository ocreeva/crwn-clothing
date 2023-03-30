import { createAction } from "../store.utility";
import * as productsType from "./products.type";

import { readCategoriesData } from "../../services/storage";

const readData = () => createAction(productsType.readData);
const readSucceeded = (data) => createAction(productsType.readSucceeded, data);
const readFailed = (error) => createAction(productsType.readFailed, [], error);

export const readDataAsync = () => async (dispatch) => {
    dispatch(readData());

    let data;
    try {
        data = await readCategoriesData();
    } catch (error) {
        dispatch(readFailed(error));
        return;
    }

    dispatch(readSucceeded(data));
};
