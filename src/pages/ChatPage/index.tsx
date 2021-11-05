import React, { useState } from 'react'
import ChatTemplate from '../../components/templates/ChatTemplate'
import ChatHeader from '../../components/molecules/ChatHeader'

const ChatPage: React.FC = () => {
    const [chatId, setChatId] = useState<number>(-1)
    const [companionName, setCompanionName] = useState<string>('')
    const [isHeaderHidden, setHeaderHidden] = useState<boolean>(false)
    const handleChat = (id: number, name: string) => {
        setChatId(id)
        setCompanionName(name)
    }
    const hideHeader = (hide: boolean) => {
        hide && setHeaderHidden(true)
        !hide && setHeaderHidden(false)
    }
    return (
        <>
            {!isHeaderHidden && <ChatHeader />}
            <ChatTemplate
                handleChat={handleChat}
                companionName={companionName}
                chatId={chatId}
                hideHeader={hideHeader}
            />
        </>
    )
}

export default ChatPage
