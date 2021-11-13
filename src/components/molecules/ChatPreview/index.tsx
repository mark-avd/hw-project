import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Icon from '../../atoms/Icon'
import Text2 from '../../atoms/Text2'
import { observer } from 'mobx-react-lite'
import { store } from '../../../stores/store'
import './style.scss'

interface ChatPreview {
    id: number
    name: string
    text: string
    chatId: number
    isOutgoing: boolean
    gender: string
}

const ChatPreview: React.FC<ChatPreview> = ({ id, text, name, chatId, isOutgoing, gender }) => {
    const [isActive, setActive] = useState<boolean>(false)
    const chatPreviewClass = classNames({
        'chat-preview': true,
        'chat-preview_active': isActive,
    })

    useEffect(() => {
        if (window.innerWidth > 600) {
            chatId === id ? setActive(true) : setActive(false)
        }
    }, [chatId, id])

    if (text.length > 27) {
        text = text.substring(0, 27) + '...'
    }

    return (
        <div
            className={chatPreviewClass}
            onClick={() => {
                store.openMessages(id, name, gender)
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
