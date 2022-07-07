import React from 'react'
import InputBase from 'components/inputBase'
import { ReactComponent as SearchIcon } from 'assets/svg/Search.svg'
import Button from 'components/button'
import { ISearchProps } from 'components/search/Search.types'

const Search: React.FC<ISearchProps> = ({ onSubmit, name, placeholder }) => {
	const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
		e
	) => {
		if (e.key === 'Enter' && onSubmit) {
			onSubmit()
		}
	}
	return (
		<div className="search-wrapper">
			<Button
				variant="icon"
				className="search__icon-button"
				type="submit"
			>
				<SearchIcon />
			</Button>
			<InputBase
				className="search__input"
				name={name}
				onKeyDown={onKeyDownHandler}
				placeholder={placeholder}
			/>
			<Button className="search__button" variant="primary">
				Search
			</Button>
		</div>
	)
}

export default Search
