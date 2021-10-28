import React from 'react'
import LogoIcons from '../../atoms/LogoIcons'
import HeaderProfileIcon from '../../atoms/HeaderProfileIcon'
import './style.scss'

const ChatHeader: React.FC = () => {
    return (
        <div className={'chat-header'}>
            <div className={'chat-header__logo-icons'}>
                <LogoIcons />
            </div>
            <div className={'chat-header__profile-icon'}>
                <HeaderProfileIcon />
            </div>
        </div>
    )
}

export default ChatHeader
