import { IBookCardProps } from 'components/bookCard/BookCard.types'
import React from 'react'
import { Link } from 'react-router-dom'

const BookCard: React.FC<IBookCardProps> = ({
	category,
	author,
	bookName,
	imageLink,
	link,
	...props
}) => {
	return (
		<Link to={link}>
			<div className="book-card" {...props}>
				<img
					className="book-card__image"
					src={imageLink}
					alt="bookImage"
				/>
				<div className="book-card__category">{category}</div>
				<div className="book-card__title">{bookName}</div>
				<div className="book-card__author">{author}</div>
			</div>
		</Link>
	)
}

export default BookCard
