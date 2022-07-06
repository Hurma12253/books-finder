import React from 'react'
import { IButtonProps } from 'components/button/Button.types'
import classNames from 'classnames'

const Button: React.FC<IButtonProps> = ({
	children,
	variant,
	className,
	...props
}) => {
	const buttonClasses = classNames('button', `button--${variant}`, className)
	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	)
}

export default Button
