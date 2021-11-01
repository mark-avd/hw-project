import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './../../atoms/Icon'
import './style.scss'

const ChatHeader: React.FC = () => {
    return (
        <div className={'chat-header'}>
            <NavLink to={'/'}>
                <div className={'chat-header__logo-icons'}>
                    <Icon type={'logo'} />
                </div>
            </NavLink>
            <div className={'chat-header__profile-icon'}>
                <Icon type={'header-profile-icon'} />
            </div>
        </div>
    )
}

export default ChatHeader
