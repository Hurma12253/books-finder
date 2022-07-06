import React from 'react'
import { ISelectProps } from 'components/select/Select.types'
import classNames from 'classnames'

const Select: React.FC<ISelectProps> = ({
	label,
	wrapperClassName,
	...props
}) => {
	const wrapperClassNames = classNames('select-wrapper', wrapperClassName)

	return (
		<div className={wrapperClassNames}>
			<label className="select__label">
				{label}
				<select className="select" {...props}></select>
			</label>
		</div>
	)
}

export default Select
