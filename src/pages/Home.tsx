import React from 'react'
import Container from 'components/container'
import Search from 'components/search'
import Select from 'components/select'
import { useDispatch } from 'react-redux'
import { searchBooksAction } from 'store/books/actions'
import { CategoryParam, OrderByParam } from 'api/type'
import { useSelector } from 'react-redux'
import { getBooksState } from 'store/books/getters'

const Home: React.FC = () => {
	const { booksCount } = useSelector(getBooksState)
	const dispatch = useDispatch()
	const formRef = React.createRef<HTMLFormElement>()

	const onSearchEnterHandler = () => {
		formRef.current?.submit()
	}

	const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
		event
	) => {
		event.preventDefault()

		const form = event.target as HTMLFormElement & {
			sorting: { value: OrderByParam }
			categories: { value: CategoryParam }
			search: { value: string }
		}

		dispatch(
			searchBooksAction({
				search: form.search.value,
				category: form.categories.value,
				orderBy: form.sorting.value,
			})
		)
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
							defaultValue="relevance"
						>
							<option value="relevance">relevance</option>
							<option value="newest">newest</option>
						</Select>
						<Select
							wrapperClassName="selects__control"
							label="Categories: "
							name="categories"
							defaultValue="all"
						>
							<option value="all">all</option>
							<option value="art">art</option>
							<option value="biography">biography</option>
							<option value="history">history</option>
							<option value="medical">medical</option>
							<option value="poetry">poetry</option>
							<option value="computers">computers</option>
						</Select>
					</div>
					<div className="selects__block">
						<div className="books-found">
							Found: {booksCount} books
						</div>
					</div>
				</div>
			</form>
		</Container>
	)
}

export default Home
