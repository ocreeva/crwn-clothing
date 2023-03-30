import { all, call } from 'redux-saga/effects';

import productsSaga from './products/products.saga';

function* rootSaga() {
    yield all([
        call(productsSaga),
    ]);
}

export default rootSaga;
