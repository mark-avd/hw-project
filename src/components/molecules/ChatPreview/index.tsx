import React, { Dispatch, SetStateAction, useState } from 'react'
import classNames from 'classnames'
import UserIcon from '../../atoms/UserIcon'
import Text2 from '../../atoms/Text2'
import './style.scss'

interface ChatPreview {
    name: string
    text: string
    gender: string
    isActive: boolean
    isOutgoing: boolean
    setChatId: Dispatch<SetStateAction<number>>
    setCompanionName: Dispatch<SetStateAction<string>>
    id: number
}

const ChatPreview: React.FC<ChatPreview> = ({
    id,
    text,
    name,
    gender,
    isOutgoing,
    setChatId,
    setCompanionName,
    isActive,
}) => {
    const chatPreviewClass = classNames({
        'chat-preview': true,
        'chat-preview_active': isActive,
    })

    if (text.length > 27) {
        text = text.substring(0, 27) + '...'
    }

    return (
        <div
            className={chatPreviewClass}
            onClick={() => {
                setChatId(id)
                setCompanionName(name)
            }}
        >
            <div className={'chat-preview__user-icon'}>
                <UserIcon gender={gender} />
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

export default ChatPreview
