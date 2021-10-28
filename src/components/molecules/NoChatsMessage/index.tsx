import React from 'react'
import NoChatsIcon from '../../atoms/NoChatsIcon'
import './style.scss'

const NoChatsMessage: React.FC = () => {
    return (
        <div className={'no-chats-message'}>
            <NoChatsIcon />
            <p className={'no-chats-message__text'}>
                There is no other users yet
            </p>
        </div>
    )
}

export default NoChatsMessage
