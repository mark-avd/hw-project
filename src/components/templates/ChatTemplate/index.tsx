import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import Icon from '../../atoms/Icon'
import Chat from '../../organisms/Chat'
import ChatHeader from '../../molecules/ChatHeader'
import ChatSideBar from '../../organisms/ChatSideBar'
import SelectChatMessage from '../../molecules/SelectChatMessage'
import { store } from '../../../stores/store'
import './style.scss'

interface ChatTemplate {
    isSuspended?: boolean
}

const ChatTemplate: React.FC<ChatTemplate> = ({ isSuspended = false }) => {
    const [isHeaderHidden, setHeaderHidden] = useState<boolean>(false)
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
    const openMessages = (): void => {
        if (window.innerWidth <= 600) {
            setChatVisible(true)
            setSideBarHidden(true)
            hideHeader(true)
        }
    }
    const closeMessages = (): void => {
        if (window.innerWidth <= 600) {
            setChatVisible(false)
            setSideBarHidden(false)
            hideHeader(false)
        }
    }
    const hideHeader = (hide: boolean): void => {
        hide && setHeaderHidden(true)
        !hide && setHeaderHidden(false)
    }

    return (
        <>
            {!isHeaderHidden && <ChatHeader />}
            <div className={'chat-template'}>
                <div className={sideBarClass} onClick={openMessages}>
                    {!isSuspended && <ChatSideBar />}
                </div>
                <div className={chatClass}>
                    {isSuspended && (
                        <div className={'chat-template__chat-loading'}>
                            <Icon type={'loading'} />
                        </div>
                    )}
                    {!isSuspended &&
                        (!store.person ? (
                            <SelectChatMessage />
                        ) : (
                            <Chat closeMessages={closeMessages} />
                        ))}
                </div>
            </div>
        </>
    )
}

export default observer(ChatTemplate)
