import React from 'react'
import ChatCompanion from '../../molecules/ChatCompanion'
import ChatInputArea from '../../molecules/ChatInputArea'
import ChatMessages from '../ChatMessages'
import './style.scss'

interface Chat {
    chatId: number
    companion: { name: string; gender: string }
    closeMessages: () => void
}

const Chat: React.FC<Chat> = ({ chatId, companion, closeMessages }) => {
    return (
        <div className={'chat'}>
            <div className={'chat__companion'}>
                <ChatCompanion companion={companion} closeMessages={closeMessages} />
            </div>
            <div className={'chat__messages'}>
                <ChatMessages chatId={chatId} />
            </div>
            <div className={'chat__input-area'}>
                <ChatInputArea />
            </div>
        </div>
    )
}

export default Chat
