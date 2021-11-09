import React, { useState } from 'react'
import classNames from 'classnames'
import Chat from '../../organisms/Chat'
import ChatSideBar from '../../organisms/ChatSideBar'
import SelectChatMessage from '../../molecules/SelectChatMessage'
import './style.scss'

interface ChatTemplate {
    chatId: number
    companionName: string
    handleChat: (id: number, name: string) => void
    hideHeader: (hide: boolean) => void
    users?: []
}

const ChatTemplate: React.FC<ChatTemplate> = ({
    handleChat,
    chatId,
    companionName,
    hideHeader,
    users
}) => {
    const [isSideBarHidden, setSideBarHidden] = useState<boolean>(false)
    const [isChatVisible, setChatVisible] = useState<boolean>(false)

    const sideBarClass = classNames({
        'chat-template__sidebar': true,
        'chat-template__sidebar_hidden': isSideBarHidden,
    })
    const chatClass = classNames({
        'chat-template__chat': true,
        'chat-template__chat_visible': isChatVisible,
    })
    const openMessages = () => {
        if (window.innerWidth <= 600) {
            setChatVisible(true)
            setSideBarHidden(true)
            hideHeader(true)
        }
    }

    const closeMessages = () => {
        if (window.innerWidth <= 600) {
            setChatVisible(false)
            setSideBarHidden(false)
            hideHeader(false)
        }
    }

    return (
        <div className={'chat-template'}>
            <div className={sideBarClass} onClick={openMessages}>
                <ChatSideBar handleChat={handleChat} chatId={chatId} users={users} />
            </div>
            <div className={chatClass}>
                {chatId === -1 ? (
                    <SelectChatMessage />
                ) : (
                    <Chat
                        chatId={chatId}
                        companionName={companionName}
                        closeMessages={closeMessages}
                    />
                )}
            </div>
        </div>
    )
}

export default ChatTemplate
