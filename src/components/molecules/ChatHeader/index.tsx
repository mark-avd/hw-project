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
            <NavLink to={'/'} onClick={closeConnection}>
                <div className={'chat-header__logo-icons'}>
                    <Icon type={'logo'} />
                </div>
            </NavLink>
            <div className={'chat-header__profile-icon'}>
                <Icon type={'header-profile'} />
            </div>
        </div>
    )
}

export default ChatHeader
