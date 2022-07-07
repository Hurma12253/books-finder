import React from 'react'
import classNames from 'classnames'
import { IInputBaseProps } from 'components/inputBase/InputBase.types'

const InputBase: React.FC<IInputBaseProps> = ({ className, ...props }) => {
	const inputClasses = classNames('input-base', className)
	return <input className={inputClasses} {...props} />
}

export default InputBase
