import React from 'react'
import errorIcon from '../../../assets/error-input-icon.svg'
import './style.scss'

const InputErrorIcon: React.FC = () => {
    return (
        <>
            <img
                className={'input-error-icon'}
                src={errorIcon}
                alt="input verification fail icon"
            />
        </>
    )
}

export default InputErrorIcon
