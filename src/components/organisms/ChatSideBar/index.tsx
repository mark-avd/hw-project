import React from 'react'
import ChatPreview from '../../molecules/ChatPreview'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import { mockChats } from '../../../mockChats'
import './style.scss'

interface ChatSideBar {
    handleChat: (id: number, name: string) => void
    isActive?: boolean
}

const ChatSideBar: React.FC<ChatSideBar> = ({ handleChat }) => {
    return (
        <div className={'chat-sidebar'}>
            {/*<NoChatsMessage />*/}
            {mockChats.map(({ name, id }) => (
                <ChatPreview
                    key={id}
                    id={id}
                    name={name}
                    text={"I'll show you who's the boss of this gym."}
                    gender={'male'}
                    isActive={false}
                    isOutgoing={true}
                    handleChat={handleChat}
                />
            ))}
        </div>
    )
}

export default ChatSideBar
