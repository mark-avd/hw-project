import React, { useState } from 'react'
import ChatTemplate from '../../components/templates/ChatTemplate'
import ChatHeader from '../../components/molecules/ChatHeader'

const ChatPage: React.FC = () => {
    const [chatId, setChatId] = useState<number>(-1)
    const [companionName, setCompanionName] = useState<string>('')
    return (
        <>
            <ChatHeader />
            <ChatTemplate
                chatId={chatId}
                setChatId={setChatId}
                companionName={companionName}
                setCompanionName={setCompanionName}
            />
        </>
    )
}

export default ChatPage
