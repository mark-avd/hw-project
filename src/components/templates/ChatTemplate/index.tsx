import React, { useState } from 'react'
import ChatSideBar from '../../organisms/ChatSideBar'
import Chat from '../../organisms/Chat'
import './style.scss'
import SelectChatMessage from '../../molecules/SelectChatMessage'

const ChatTemplate: React.FC = () => {
    const [chatId, setChatId] = useState(-1)
    const [companionName, setCompanionName] = useState('')

    return (
        <div className={'chat-template'}>
            <div className={'chat-template__sidebar'}>
                <ChatSideBar
                    setChatId={setChatId}
                    setCompanionName={setCompanionName}
                />
            </div>
            <div className={'chat-template__chat'}>
                {chatId === -1 ? (
                    <SelectChatMessage />
                ) : (
                    <Chat chatId={chatId} companionName={companionName} />
                )}
            </div>
        </div>
    )
}

export default ChatTemplate
