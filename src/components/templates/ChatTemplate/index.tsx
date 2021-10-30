import React, { Dispatch, SetStateAction } from 'react'
import ChatSideBar from '../../organisms/ChatSideBar'
import Chat from '../../organisms/Chat'
import './style.scss'
import SelectChatMessage from '../../molecules/SelectChatMessage'

interface ChatTemplate {
    chatId: number
    companionName: string
    setChatId: Dispatch<SetStateAction<number>>
    setCompanionName: Dispatch<SetStateAction<string>>
}

const ChatTemplate: React.FC<ChatTemplate> = ({
    setChatId,
    setCompanionName,
    chatId,
    companionName,
}) => {
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
