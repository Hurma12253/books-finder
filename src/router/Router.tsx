import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import { Paths } from 'router/constants'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={Paths.home} element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
