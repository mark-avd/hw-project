import React from 'react'
import Icon from './../../atoms/Icon'
import './style.scss'

const ChatHeader: React.FC = () => {
    return (
        <div className={'chat-header'}>
            <div className={'chat-header__logo-icons'}>
                <Icon type={'logo'} />
            </div>
            <div className={'chat-header__profile-icon'}>
                <Icon type={'header-profile'} />
            </div>
        </div>
    )
}

export default ChatHeader
