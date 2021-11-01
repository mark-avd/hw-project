import React from 'react'
import ChatPreview from '../../molecules/ChatPreview'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NoChatsMessage from '../../molecules/NoChatsMessage'
import { mockChats } from '../../../mockChats'
import './style.scss'

interface ChatSideBar {
    chatId: number
    handleChat: (id: number, name: string) => void
}

const ChatSideBar: React.FC<ChatSideBar> = ({ handleChat, chatId }) => {
    return (
        <div className={'chat-sidebar'}>
            {mockChats.length === 0 && <NoChatsMessage />}
            {mockChats.map(({ name, id }) => (
                <ChatPreview
                    key={id}
                    id={id}
                    name={name}
                    chatId={chatId}
                    text={"I'll show you who's the boss of this gym."}
                    isOutgoing={true}
                    handleChat={handleChat}
                />
            ))}
        </div>
    )
}

export default ChatSideBar
