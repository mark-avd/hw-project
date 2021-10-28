import React from 'react'
import leftIcon from '../../../assets/vector-left.svg'
import rightIcon from '../../../assets/vector-right.svg'

const LogoIcons: React.FC = () => {
    return (
        <>
            <img src={leftIcon} alt="logo icon" />
            <img src={rightIcon} alt="logo icon" />
        </>
    )
}

export default LogoIcons
