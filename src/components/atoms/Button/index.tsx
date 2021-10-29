import React from 'react'
import './style.scss'

interface Button {
    buttonText: string
    isDisabled: boolean
    type: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<Button> = ({ buttonText, isDisabled, type }) => {
    return (
        <button className={'button'} disabled={isDisabled} type={type}>
            {buttonText}
        </button>
    )
}

export default Button
