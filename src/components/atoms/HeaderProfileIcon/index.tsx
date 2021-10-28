import React from 'react'
import profileIcon from './../../../assets/header-profile-icon.svg'

const HeaderProfileIcon: React.FC = () => {
    return (
        <img
            className={'header-profile-icon'}
            src={profileIcon}
            alt={'profile icon'}
        />
    )
}

export default HeaderProfileIcon
