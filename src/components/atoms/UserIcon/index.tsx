import React from 'react'
import maleIcon from './../../../assets/user-icon-male.svg'
import femaleIcon from './../../../assets/user-icon-female.svg'

interface UserIcon {
    gender: string
}

const UserIcon: React.FC<UserIcon> = ({ gender }) => {
    return (
        <>
            {gender == 'male' && <img src={maleIcon} alt="user icon" />}
            {gender == 'female' && <img src={femaleIcon} alt="user icon" />}
        </>
    )
}

export default UserIcon
