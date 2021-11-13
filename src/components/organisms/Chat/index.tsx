import React from 'react'
import ChatCompanion from '../../molecules/ChatCompanion'
import ChatInputArea from '../../molecules/ChatInputArea'
import ChatMessages from '../ChatMessages'
import './style.scss'

interface Chat {
    closeMessages: () => void
}

const Chat: React.FC<Chat> = ({ closeMessages }) => {
    return (
        <div className={'chat'}>
            <div className={'chat__companion'}>
                <ChatCompanion closeMessages={closeMessages} />
            </div>
            <div className={'chat__messages'}>
                <ChatMessages />
            </div>
            <div className={'chat__input-area'}>
                <ChatInputArea />
            </div>
        </div>
    )
}

export default Chat
