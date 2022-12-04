import { ISearchBooksParams, ISearchBooksResponse } from 'api/type'
import { BooksActions } from 'store/books/constants'
import {
	ILoadMoreAction,
	ILoadMoreFailureAction,
	ILoadMoreRequestAction,
	ILoadMoreSuccessAction,
	ISearchBooksAction,
	ISearchBooksFailureAction,
	ISearchBooksRequestAction,
	ISearchBooksSuccessAction,
} from 'store/books/types'

export const searchBooksAction = (
	params: ISearchBooksParams
): ISearchBooksAction => {
	return {
		type: BooksActions.BOOKS_SEARCH_ACTION,
		payload: params,
	}
}

export const searchBooksRequestAction = (): ISearchBooksRequestAction => {
	return {
		type: BooksActions.BOOKS_REQUEST_ACTION,
	}
}

export const searchBooksSuccessAction = (
	data: ISearchBooksResponse
): ISearchBooksSuccessAction => {
	return {
		type: BooksActions.BOOKS_SUCCESS_ACTION,
		payload: data,
	}
}

export const searchBooksFailureAction = (
	error: string
): ISearchBooksFailureAction => {
	return {
		type: BooksActions.BOOKS_FAILURE_ACTION,
		error,
	}
}

export const loadMoreAction = (params: ISearchBooksParams): ILoadMoreAction => {
	return {
		type: BooksActions.LOAD_MORE_ACTION,
		payload: params,
	}
}
export const loadMoreRequestAction = (): ILoadMoreRequestAction => {
	return {
		type: BooksActions.LOAD_MORE_REQUEST_ACTION,
	}
}
export const loadMoreSuccessAction = (
	data: ISearchBooksResponse
): ILoadMoreSuccessAction => {
	return {
		type: BooksActions.LOAD_MORE_SUCCESS_ACTION,
		payload: data,
	}
}
export const loadMoreFailureAction = (
	error: string
): ILoadMoreFailureAction => {
	return {
		type: BooksActions.LOAD_MORE_FAILURE_ACTION,
		payload: {
			error,
		},
	}
}
