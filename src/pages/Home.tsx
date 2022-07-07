import React from 'react'
import Container from 'components/container'
import Search from 'components/search'
import Select from 'components/select'

const Home: React.FC = () => {
	const formRef = React.createRef<HTMLFormElement>()

	const onSearchEnterHandler = () => {
		formRef.current?.submit()
	}

	const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
		event
	) => {
		event.preventDefault()

		// TODO: on form submit logic
	}

	return (
		<Container size="md" className="home__container">
			<form action="post" ref={formRef} onSubmit={onSubmitHandler}>
				<Search
					name="search"
					onSubmit={onSearchEnterHandler}
					placeholder="Write any book name"
				/>
				<div className="home__selects">
					<div className="selects__block">
						<Select
							wrapperClassName="selects__control"
							label="Sorting by: "
							name="sorting"
						>
							<option value="relevance">relevance</option>
							<option value="popularity">popularity</option>
							<option value="latest">latest</option>
						</Select>
						<Select
							wrapperClassName="selects__control"
							label="Categories: "
							name="categories"
						>
							<option value="all">all</option>
							<option value="computers">computers</option>
							<option value="architecture">architecture</option>
						</Select>
					</div>
				</div>
			</form>
		</Container>
	)
}

export default Home
