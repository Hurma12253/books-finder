import { BooksActions } from 'store/books/constants'
import { Book, ISearchBooksParams, ISearchBooksResponse } from 'api/type'

export interface IBooksState {
	books: Book[]
	booksCount: number
	isLoading: boolean
	error: string | null
	touched: boolean
	isLoadMore: boolean
	currentIndex: number
}

export interface ISearchBooksAction {
	type: BooksActions.BOOKS_SEARCH_ACTION
	payload: ISearchBooksParams
}
export interface ISearchBooksRequestAction {
	type: BooksActions.BOOKS_REQUEST_ACTION
}
export interface ISearchBooksSuccessAction {
	type: BooksActions.BOOKS_SUCCESS_ACTION
	payload: ISearchBooksResponse
}
export interface ISearchBooksFailureAction {
	type: BooksActions.BOOKS_FAILURE_ACTION
	error: string
}

export interface ILoadMoreAction {
	type: BooksActions.LOAD_MORE_ACTION
	payload: ISearchBooksParams
}
export interface ILoadMoreRequestAction {
	type: BooksActions.LOAD_MORE_REQUEST_ACTION
}
export interface ILoadMoreSuccessAction {
	type: BooksActions.LOAD_MORE_SUCCESS_ACTION
	payload: ISearchBooksResponse
}
export interface ILoadMoreFailureAction {
	type: BooksActions.LOAD_MORE_FAILURE_ACTION
	payload: {
		error: string
	}
}

export type BooksActionsUnion =
	| ISearchBooksRequestAction
	| ISearchBooksSuccessAction
	| ISearchBooksFailureAction
	| ILoadMoreRequestAction
	| ILoadMoreSuccessAction
	| ILoadMoreFailureAction
