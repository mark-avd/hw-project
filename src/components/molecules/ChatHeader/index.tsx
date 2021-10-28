import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoIcons from '../../atoms/LogoIcons'
import HeaderProfileIcon from '../../atoms/HeaderProfileIcon'
import './style.scss'

const ChatHeader: React.FC = () => {
    return (
        <div className={'chat-header'}>
            <NavLink to={'/'}>
                <div className={'chat-header__logo-icons'}>
                    <LogoIcons />
                </div>
            </NavLink>
            <div className={'chat-header__profile-icon'}>
                <HeaderProfileIcon />
            </div>
        </div>
    )
}

export default ChatHeader
