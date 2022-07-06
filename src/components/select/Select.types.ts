import { InputHTMLAttributes } from 'react'

export interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
	label: string
	wrapperClassName?: string
}
