import { all, call, put, takeLatest } from "redux-saga/effects";

import { createAction } from "../store.utility";
import * as type from "./products.type";

import { readCategoriesData } from "../../services/storage";

const readSucceeded = (data) => createAction(type.readSucceeded, data);
const readFailed = (error) => createAction(type.readFailed, [], error);

function* readDataAsync() {
    let data;
    try {
        data = yield readCategoriesData();
    } catch (error) {
        yield put(readFailed(error));
        return;
    }

    yield put(readSucceeded(data));
};

function* handleReadData() {
    yield takeLatest(type.readData, readDataAsync);
}

function* productsSaga() {
    yield all([
        call(handleReadData),
    ]);
}

export default productsSaga;
