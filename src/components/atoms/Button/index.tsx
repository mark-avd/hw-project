import React from 'react'
import './style.scss'

interface Button {
    buttonText: string
    isDisabled: boolean
    onClick: (value: React.MouseEvent) => void
    onDoubleClick: (value: React.MouseEvent) => void
}

const Button: React.FC<Button> = ({
    buttonText,
    onClick,
    onDoubleClick,
    isDisabled,
}) => {
    return (
        <>
            <button
                onClick={onClick}
                className={'button'}
                disabled={isDisabled}
                onDoubleClick={onDoubleClick}
                type={'submit'}
            >
                {buttonText}
            </button>
        </>
    )
}

export default Button
