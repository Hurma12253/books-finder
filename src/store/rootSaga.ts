import { all } from 'redux-saga/effects'
import booksSaga from 'store/books/booksSaga'

function* rootSaga() {
	yield all([booksSaga()])
}

export default rootSaga
