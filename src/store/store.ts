import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'store/rootReducer'
import rootSaga from 'store/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
