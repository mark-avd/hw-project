import React from 'react'
import ChatCompanion from '../../molecules/ChatCompanion'
import ChatInputArea from '../../molecules/ChatInputArea'
import ChatMessages from '../ChatMessages'
import './style.scss'

interface Chat {
    chatId: number
    companionName: string
    closeMessages: () => void
}

const Chat: React.FC<Chat> = ({ chatId, companionName, closeMessages }) => {
    return (
        <div className={'chat'}>
            <div className={'chat__companion'}>
                <ChatCompanion companionName={companionName} closeMessages={closeMessages} />
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
