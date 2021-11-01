import React, { useState } from 'react'
import ChatTemplate from '../../components/templates/ChatTemplate'
import ChatHeader from '../../components/molecules/ChatHeader'

const ChatPage: React.FC = () => {
    const [chatId, setChatId] = useState<number>(-1)
    const [companionName, setCompanionName] = useState<string>('')
    const handleChat = (id: number, name: string) => {
        setChatId(id)
        setCompanionName(name)
    }
    return (
        <>
            <ChatHeader />
            <ChatTemplate
                handleChat={handleChat}
                companionName={companionName}
                chatId={chatId}
            />
        </>
    )
}

export default ChatPage
