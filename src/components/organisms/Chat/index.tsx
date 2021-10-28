import React from 'react'
import ChatCompanion from '../../molecules/ChatCompanion'
import ChatInputArea from '../../molecules/ChatInputArea'
import ChatMessages from '../ChatMessages'
import './style.scss'

interface Chat {
    chatId: number
    companionName: string
}

const Chat: React.FC<Chat> = ({ chatId, companionName }) => {
    return (
        <div className={'chat'}>
            <div className={'chat__interlocutor'}>
                <ChatCompanion companionName={companionName} />
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
