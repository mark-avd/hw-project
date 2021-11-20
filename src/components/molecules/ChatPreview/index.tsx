import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import Icon from '../../atoms/Icon'
import Text2 from '../../atoms/Text2'
import { store } from '../../../stores/store'
import { websocketInstance } from '../../../utils/websocket'
import './style.scss'

interface ChatPreview {
    name: string
    gender: string
    chatId: number
    selectedChat: number | undefined
    text: string
    isOutgoing: boolean
}

const ChatPreview: React.FC<ChatPreview> = ({
                                                chatId,
                                                text,
                                                name,
                                                selectedChat,
                                                isOutgoing,
                                                gender,
                                            }) => {
    const [isActive, setActive] = useState<boolean>(false)
    const chatPreviewClass = classNames({
        'chat-preview': true,
        'chat-preview_active': isActive,
    })

    useEffect(() => {
        if (window.innerWidth > 600) {
            selectedChat === chatId ? setActive(true) : setActive(false)
        }
    }, [selectedChat, chatId])

    if (text?.length > 27) {
        text = text.substring(0, 27) + '...'
    }

    return (
        <div
            className={chatPreviewClass}
            onClick={() => {
                store.openMessages(chatId, name, gender)
                if (!websocketInstance.socketChat) {
                    websocketInstance.chatConnect()
                }
                if (localStorage.getItem('messages')) {
                    const mes = localStorage.getItem('messages')
                    mes && runInAction( () => {
                        store.messages = JSON.parse(mes)
                    })
                }
            }}
        >
            <div className={'chat-preview__user-icon'}>
                <Icon type={gender} />
            </div>
            <div className={'chat-preview__user-info'}>
                <h4 className={'chat-preview__user-name'}>{name}</h4>
                <div className={'chat-preview__last-message'}>
                    {isOutgoing && <span className={'text2'}>You: </span>}
                    <Text2 text={text} />
                </div>
            </div>
        </div>
    )
}

export default observer(ChatPreview)
