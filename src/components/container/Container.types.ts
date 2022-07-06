import { HTMLAttributes, ReactNode } from 'react'

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode
	size?: TSize
}

type TSize = 'lg' | 'md' | 'sm'
