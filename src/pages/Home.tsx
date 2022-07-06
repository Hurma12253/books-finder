import React from 'react'
import Container from 'components/container'
import Search from 'components/search'
import Select from 'components/select'

const Home: React.FC = () => {
	return (
		<Container size="md" className="home__container">
			<Search />
			<div className="home__selects">
				<div className="selects__block">
					<Select
						wrapperClassName="selects__control"
						label="Sorting by: "
					>
						<option value="1">relevance</option>
						<option value="2">popularity</option>
						<option value="3">latest</option>
					</Select>
					<Select
						wrapperClassName="selects__control"
						label="Categories: "
					>
						<option value="1">all</option>
						<option value="2">computers</option>
						<option value="3">architecture</option>
					</Select>
				</div>
			</div>
		</Container>
	)
}

export default Home
