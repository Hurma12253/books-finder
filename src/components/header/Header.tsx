import React from 'react'
import Container from 'components/container/Container'
import { ReactComponent as LogoIcon } from 'assets/svg/Logo.svg'
import { Link } from 'react-router-dom'
import { Paths } from 'router/constants'

const Header: React.FC = () => {
	return (
		<header className="header">
			<Container>
				<Link to={Paths.home}>
					<LogoIcon />
				</Link>
			</Container>
		</header>
	)
}

export default Header
