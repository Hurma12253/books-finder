import { Reducer } from 'redux'
import { BooksActions } from 'store/books/constants'
import { IBooksState, BooksActionsUnion } from 'store/books/types'

const initialState: IBooksState = {
	books: [],
	booksCount: 0,
	isLoading: false,
	error: null,
}

const booksReducer: Reducer<IBooksState, BooksActionsUnion> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case BooksActions.BOOKS_REQUEST_ACTION:
			return {
				...state,
				isLoading: true,
			}
		case BooksActions.BOOKS_SUCCESS_ACTION:
			return {
				...state,
				isLoading: false,
				books: action.payload.items,
				booksCount: action.payload.totalItems,
			}
		case BooksActions.BOOKS_FAILURE_ACTION:
			return {
				...state,
				isLoading: false,
				error: action.error,
			}
		default:
			return { ...state }
	}
}

export default booksReducer
