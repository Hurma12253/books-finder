import React from 'react'
import classNames from 'classnames'
import { IContainerProps } from 'components/container/Container.types'

const Container: React.FC<IContainerProps> = ({
	children,
	size = 'lg',
	className,
}) => {
	const containerClasses = classNames(
		'container',
		`container--${size}`,
		className
	)
	return <div className={containerClasses}>{children}</div>
}

export default Container
