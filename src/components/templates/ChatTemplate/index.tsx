import React from 'react'
import Chat from '../../organisms/Chat'
import ChatSideBar from '../../organisms/ChatSideBar'
import SelectChatMessage from '../../molecules/SelectChatMessage'
import './style.scss'

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
                    chatId={chatId}
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
