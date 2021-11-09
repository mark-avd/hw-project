import React from 'react'
import ChatPreview from '../../molecules/ChatPreview'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import './style.scss'

interface ChatSideBar {
    users?: []
    chatId: number
    handleChat: (id: number, name: string) => void
}

const ChatSideBar: React.FC<ChatSideBar> = ({ handleChat, chatId, users }) => {
    return (
        <div className={'chat-sidebar'}>
            {!users && <NoChatsMessage />}
            {users && users.map(({ name, gender, id }) => (
                <ChatPreview
                    key={id}
                    id={id}
                    name={name}
                    gender={gender}
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
