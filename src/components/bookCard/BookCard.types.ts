import { HTMLAttributes } from 'react'

export interface IBookCardProps extends HTMLAttributes<HTMLDivElement> {
	category: string
	bookName: string
	author: string
	imageLink: string
	link: string
}
