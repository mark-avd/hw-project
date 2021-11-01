import React from 'react'
import ChatSideBar from '../../organisms/ChatSideBar'
import Chat from '../../organisms/Chat'
import './style.scss'
import SelectChatMessage from '../../molecules/SelectChatMessage'

interface ChatTemplate {
    chatId: number
    companionName: string
    handleChat: (id: number, name: string) => void
}

const ChatTemplate: React.FC<ChatTemplate> = ({
    handleChat,
    chatId,
    companionName,
}) => {
    return (
        <div className={'chat-template'}>
            <div className={'chat-template__sidebar'}>
                <ChatSideBar
                    handleChat={handleChat}
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
