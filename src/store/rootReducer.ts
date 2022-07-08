import { combineReducers } from 'redux'
import booksReducer from 'store/books/booksReducer'
import { IState } from 'store/types'

const rootReducer = combineReducers<IState>({
	books: booksReducer,
})

export default rootReducer
