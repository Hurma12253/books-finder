import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'components/container'
import { Paths } from 'router/constants'
import { ReactComponent as LogoIcon } from 'assets/svg/Logo.svg'

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
