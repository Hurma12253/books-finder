import { HTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	variant: 'icon' | 'primary'
}
