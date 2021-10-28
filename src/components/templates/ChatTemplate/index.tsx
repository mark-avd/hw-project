import React from 'react'
import ChatSideBar from '../../organisms/ChatSideBar'
import './style.scss'
import Chat from '../../organisms/Chat'

const ChatTemplate: React.FC = () => {
    return (
        <div className={'chat-template'}>
            <div className={'chat-template__sidebar'}>
                <ChatSideBar />
            </div>
            <div className={'chat-template__chat'}>
                <Chat />
            </div>
        </div>
    )
}

export default ChatTemplate
