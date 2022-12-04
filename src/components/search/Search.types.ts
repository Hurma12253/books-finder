import { InputHTMLAttributes } from 'react'

export interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
	onSubmit?: () => void
	name: string
	placeholder?: string
}
