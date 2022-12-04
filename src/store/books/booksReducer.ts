import { Reducer } from 'redux'
import { BooksActions } from 'store/books/constants'
import { IBooksState, BooksActionsUnion } from 'store/books/types'

const initialState: IBooksState = {
	books: [],
	booksCount: 0,
	isLoading: false,
	error: null,
	touched: false,
	isLoadMore: false,
	currentIndex: 0,
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
				touched: false,
				books: [],
				booksCount: 0,
				isLoadMore: false,
			}
		case BooksActions.BOOKS_SUCCESS_ACTION:
			return {
				...state,
				isLoading: false,
				books: action.payload.items,
				booksCount: action.payload.totalItems,
				touched: true,
				isLoadMore:
					action.payload.items.length < action.payload.totalItems,
				currentIndex: 1,
			}
		case BooksActions.BOOKS_FAILURE_ACTION:
			return {
				...state,
				isLoading: false,
				error: action.error,
				touched: true,
			}
		case BooksActions.LOAD_MORE_REQUEST_ACTION:
			return {
				...state,
				isLoading: true,
				isLoadMore: false,
				error: null,
				currentIndex: state.currentIndex + 1,
			}
		case BooksActions.LOAD_MORE_SUCCESS_ACTION:
			const newBooks = [...state.books, ...action.payload.items]

			return {
				...state,
				isLoading: false,
				books: newBooks,
				isLoadMore: newBooks.length < action.payload.totalItems,
			}
		case BooksActions.LOAD_MORE_FAILURE_ACTION:
			return {
				...state,
				isLoading: false,
				isLoadMore: true,
				error: action.payload.error,
			}
		default:
			return { ...state }
	}
}

export default booksReducer
