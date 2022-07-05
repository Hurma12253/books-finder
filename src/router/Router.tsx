import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import { Paths } from 'router/constants'
import Header from 'components/header/Header'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={Paths.home} element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
