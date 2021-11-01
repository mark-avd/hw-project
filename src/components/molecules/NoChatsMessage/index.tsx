import React from 'react'
import Icon from '../../atoms/Icon'
import './style.scss'

const NoChatsMessage: React.FC = () => {
    return (
        <div className={'no-chats-message'}>
            <Icon type={'no-chat'} />
            <p className={'no-chats-message__text'}>
                There is no other users yet
            </p>
        </div>
    )
}

export default NoChatsMessage
