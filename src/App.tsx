import React from 'react'
import { Provider } from 'react-redux'
import Router from 'router/Router'
import store from 'store/store'
import 'styles/index.scss'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}

export default App
