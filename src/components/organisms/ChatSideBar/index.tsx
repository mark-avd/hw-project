import React from 'react'
import ChatPreview from '../../molecules/ChatPreview'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import { User } from '../../../types'
import './style.scss'

interface ChatSideBar {
    chatId: number
    users: Array<User>
    handleChat: (id: number, name: string, gender: string) => void
}

const ChatSideBar: React.FC<ChatSideBar> = ({ handleChat, chatId, users }) => {
    return (
        <div className={'chat-sidebar'}>
            {!users || users.length === 0 ? (
                <NoChatsMessage />
            ) : (
                users.map(({ name, gender }, index) => (
                    <ChatPreview
                        key={index}
                        id={index}
                        name={name}
                        gender={gender}
                        chatId={chatId}
                        text={"I'll show you who's the boss of this gym."}
                        isOutgoing={true}
                        handleChat={handleChat}
                    />
                ))
            )}
        </div>
    )
}

export default ChatSideBar
