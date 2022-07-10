import { AxiosResponse } from 'axios'
import api from 'api'
import { ISearchBooksResponse } from 'api/type'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
	searchBooksFailureAction,
	searchBooksRequestAction,
	searchBooksSuccessAction,
} from 'store/books/actions'
import { BooksActions } from 'store/books/constants'
import { ISearchBooksAction } from 'store/books/types'

function* searchBooks(action: ISearchBooksAction) {
	try {
		yield put(searchBooksRequestAction())

		const { data }: AxiosResponse<ISearchBooksResponse> = yield call(
			api.searchBooks,
			action.payload
		)

		yield put(searchBooksSuccessAction(data))
	} catch (error) {
		yield put(searchBooksFailureAction(String(error)))
	}
}

function* searchBooksWatcher() {
	yield takeLatest(BooksActions.BOOKS_SEARCH_ACTION, searchBooks)
}

export default function* booksSaga() {
	yield all([searchBooksWatcher()])
}
