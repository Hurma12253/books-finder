import React from 'react'
import classNames from 'classnames'
import { IInputBase } from 'components/inputBase/InputBase.types'

const InputBase: React.FC<IInputBase> = ({ className, ...props }) => {
	const inputClasses = classNames('input-base', className)
	return <input className={inputClasses} {...props} />
}

export default InputBase
