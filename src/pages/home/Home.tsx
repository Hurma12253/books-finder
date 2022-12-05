import React, { useCallback, useEffect, useState } from 'react'
import {
	createSearchParams,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
import Container from 'components/container'
import Search from 'components/search'
import Select from 'components/select'
import { useDispatch } from 'react-redux'
import { loadMoreAction, searchBooksAction } from 'store/books/actions'
import { CategoryParams, OrderByParams } from 'api/type'
import { useSelector } from 'react-redux'
import { getBooksState } from 'store/books/getters'
import BookCard from 'components/bookCard'
import { trimString } from 'utils/trimString'
import Button from 'components/button'
import { isInEnum } from 'utils/isInEnum'
import { Paths } from 'router/constants'

const Home: React.FC = () => {
	const { books, booksCount, touched, isLoadMore, currentIndex } =
		useSelector(getBooksState)
	const dispatch = useDispatch()

	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const [searchValue, setSearchValue] = useState<string>('')
	const [categoryValue, setCategoryValue] = useState<CategoryParams>(
		CategoryParams.all
	)
	const [sortingValue, setSortingValue] = useState<OrderByParams>(
		OrderByParams.relevance
	)

	const onSearchChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => setSearchValue(event.target.value)

	const onCategoryChangeHandler: React.ChangeEventHandler<
		HTMLSelectElement
	> = (event) => {
		const value = event.target.value as CategoryParams

		setCategoryValue(value)
	}

	const onSortingChangeHandler: React.ChangeEventHandler<
		HTMLSelectElement
	> = (event) => {
		const value = event.target.value as OrderByParams

		setSortingValue(value)
	}

	const onSearchEnterHandler = () => {
		onSubmitHandler()
	}

	// const onSubmitHandler = useCallback(() => {
	// 	dispatch(
	// 		searchBooksAction({
	// 			search: searchValue,
	// 			category: categoryValue,
	// 			orderBy: sortingValue,
	// 			startIndex: currentIndex,
	// 		})
	// 	)
	// }, [searchValue, categoryValue, sortingValue, currentIndex, dispatch])

	const onSubmitHandler = useCallback(() => {
		const searchParams = createSearchParams({
			q: searchValue,
			category: categoryValue,
			sorting: sortingValue,
		})

		navigate({ pathname: Paths.home, search: searchParams.toString() })
	}, [searchValue, categoryValue, sortingValue, navigate])

	const onLoadMoreHandler: React.MouseEventHandler<
		HTMLButtonElement
	> = () => {
		dispatch(
			loadMoreAction({
				search: searchValue,
				category: categoryValue,
				orderBy: sortingValue,
				startIndex: currentIndex,
			})
		)
	}

	useEffect(() => {
		const q = searchParams.get('q')
		const category = searchParams.get('category')
		const sorting = searchParams.get('sorting')

		console.log(q, category, sorting)

		if (q) {
			setSearchValue(q)
		}

		if (category && isInEnum(category, CategoryParams)) {
			setCategoryValue(category as CategoryParams)
		}

		if (sorting && isInEnum(sorting, OrderByParams)) {
			setSortingValue(sorting as OrderByParams)
		}

		onSubmitHandler()
	}, [searchParams, onSubmitHandler])

	return (
		<Container size="md" className="home__container">
			<Search
				name="search"
				onSubmit={onSearchEnterHandler}
				placeholder="Write any book name"
				value={searchValue}
				onChange={onSearchChangeHandler}
			/>
			<div className="home__selects">
				<div className="selects__block">
					<Select
						wrapperClassName="selects__control"
						label="Sorting by: "
						name="sorting"
						defaultValue="relevance"
						value={categoryValue}
						onChange={onCategoryChangeHandler}
					>
						<option value="relevance">relevance</option>
						<option value="newest">newest</option>
					</Select>
					<Select
						wrapperClassName="selects__control"
						label="Categories: "
						name="categories"
						defaultValue="all"
						value={sortingValue}
						onChange={onSortingChangeHandler}
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
					{touched && (
						<div className="books-found">
							Found: {booksCount} books
						</div>
					)}
				</div>
			</div>
			<div className="home__books-container">
				{books.map((book) => {
					const bookInfo = book.volumeInfo
					const link = `/book/${book.id}`

					return (
						<BookCard
							key={book.id}
							link={link}
							category={
								bookInfo.categories && bookInfo.categories[0]
							}
							author={
								bookInfo.authors &&
								trimString(bookInfo.authors[0], 25)
							}
							imageLink={
								bookInfo.imageLinks &&
								bookInfo.imageLinks.thumbnail
							}
							bookName={
								bookInfo.title && trimString(bookInfo.title, 40)
							}
						/>
					)
				})}
			</div>
			{isLoadMore && (
				<div className="home__load-more-button-container">
					<Button
						className="home__load-more-button"
						variant="secondary"
						onClick={onLoadMoreHandler}
					>
						Load more...
					</Button>
				</div>
			)}
		</Container>
	)
}

export default Home
