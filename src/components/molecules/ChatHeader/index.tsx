import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './../../atoms/Icon'
import './style.scss'

interface ChatHeader {
    closeConnection?: () => void
}

const ChatHeader: React.FC<ChatHeader> = ({closeConnection}) => {
    return (
        <div className={'chat-header'}>
            <NavLink to={'/'}>
                <div className={'chat-header__logo-icons'}>
                    <Icon type={'logo'} />
                </div>
            </NavLink>
            <div className={'chat-header__profile-icon'} onClick={closeConnection}>
                <Icon type={'header-profile'} />
            </div>
        </div>
    )
}

export default ChatHeader
