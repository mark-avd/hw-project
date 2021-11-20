import React from 'react'
import Icon from './../../atoms/Icon'
import { websocketInstance } from '../../../utils/websocket'
import './style.scss'

const ChatHeader: React.FC = () => {
    const closeConnection = () => {
        websocketInstance.disconnect()
        localStorage.removeItem('token')
    }
    return (
        <div className={'chat-header'}>
            <div className={'chat-header__logo-icons'}>
                <Icon type={'logo'} />
            </div>
            <div className={'chat-header__profile-icon'} onClick={closeConnection}>
                <Icon type={'header-profile'} />
            </div>
        </div>
    )
}

export default ChatHeader
