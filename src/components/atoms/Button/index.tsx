import React from 'react'
import './style.scss'
import classNames from 'classnames'

interface Button {
    type: 'button' | 'submit' | 'reset' | undefined
    buttonText: string
    isDisabled: boolean
    isPrimary?: boolean
    onClick?: () => void
}

const Button: React.FC<Button> = ({ buttonText, isDisabled, type, isPrimary = true, onClick }) => {
    const buttonClass = classNames({
        button_primary: isPrimary,
        button_secondary: !isPrimary,
    })
    return (
        <button className={buttonClass} disabled={isDisabled} type={type} onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button
