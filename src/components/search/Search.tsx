import React from 'react'
import InputBase from 'components/inputBase'
import { ReactComponent as SearchIcon } from 'assets/svg/Search.svg'
import Button from 'components/button'

const Search: React.FC = () => {
	return (
		<div className="search-wrapper">
			<Button variant="icon" className="search__icon-button">
				<SearchIcon />
			</Button>
			<InputBase
				className="search__input"
				placeholder="Write any book name"
			/>
			<Button variant="primary" className="search__button">
				Search
			</Button>
		</div>
	)
}

export default Search
