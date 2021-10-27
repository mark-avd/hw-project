import React from 'react'
import leftIcon from '../../../assets/vector-left.svg'
import rightIcon from '../../../assets/vector-right.svg'
import './style.scss'

const LogoIcons: React.FC = () => {
    return (
        <>
            <div className={'logo-icons'}>
                <img src={leftIcon} alt="logo icon" />
                <img
                    className={'logo-icons__right-icon'}
                    src={rightIcon}
                    alt="logo icon"
                />
            </div>
        </>
    )
}

export default LogoIcons
