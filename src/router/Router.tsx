import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/Home'
import Header from 'components/header'
import { Paths } from 'router/constants'

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
