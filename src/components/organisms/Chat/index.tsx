import React from 'react'
import './style.scss'
import ChatInterlocutor from '../../molecules/ChatInterlocutor'
import ChatInputArea from '../../molecules/ChatInputArea'
import ChatMessages from '../ChatMessages'


const Chat: React.FC = () => {
    return (
        <div className={'chat'}>
            <div className={'chat__interlocutor'}>
                <ChatInterlocutor />
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
