import React, { useState } from 'react'
import ChatSideBar from '../../organisms/ChatSideBar'
import Chat from '../../organisms/Chat'
import './style.scss'

const ChatTemplate: React.FC = () => {
    const [chatId, setChatId] = useState(0)
    const [companionName, setCompanionName] = useState('')


    return (
        <div className={'chat-template'}>
            <div className={'chat-template__sidebar'}>
                <ChatSideBar setChatId={setChatId} setCompanionName={setCompanionName} />
            </div>
            <div className={'chat-template__chat'}>
                <Chat chatId={chatId} companionName={companionName} />
            </div>
        </div>
    )
}

export default ChatTemplate
