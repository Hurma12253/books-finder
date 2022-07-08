import { Reducer } from 'redux'
import { IBooksState, BooksActionsUnion } from 'store/books/types'

const initialState: IBooksState = {
	books: [],
	isLoading: false,
	error: null,
}

const booksReducer: Reducer<IBooksState, BooksActionsUnion> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		default:
			return { ...state }
	}
}

export default booksReducer
