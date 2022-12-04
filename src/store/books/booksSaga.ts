import { AxiosResponse } from 'axios'
import api from 'api'
import { ISearchBooksResponse } from 'api/type'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
	loadMoreFailureAction,
	loadMoreRequestAction,
	loadMoreSuccessAction,
	searchBooksFailureAction,
	searchBooksRequestAction,
	searchBooksSuccessAction,
} from 'store/books/actions'
import { BooksActions } from 'store/books/constants'
import { ILoadMoreAction, ISearchBooksAction } from 'store/books/types'

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

function* loadMore(action: ILoadMoreAction) {
	try {
		yield put(loadMoreRequestAction())

		const { data }: AxiosResponse<ISearchBooksResponse> = yield call(
			api.searchBooks,
			action.payload
		)

		yield put(loadMoreSuccessAction(data))
	} catch (error) {
		yield put(loadMoreFailureAction(String(error)))
	}
}

function* searchBooksWatcher() {
	yield takeLatest(BooksActions.BOOKS_SEARCH_ACTION, searchBooks)
}

function* loadMoreWatcher() {
	yield takeLatest(BooksActions.LOAD_MORE_ACTION, loadMore)
}

export default function* booksSaga() {
	yield all([searchBooksWatcher(), loadMoreWatcher()])
}
