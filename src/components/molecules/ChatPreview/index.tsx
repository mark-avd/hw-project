import React from 'react'
import classNames from 'classnames'
import UserIcon from '../../atoms/UserIcon'
import './style.scss'
import Text2 from '../../atoms/Text2'

interface ChatPreview {
    name: string
    text: string
    gender: string
    isActive: boolean
    isOutgoing: boolean
}

const ChatPreview: React.FC<ChatPreview> = ({
    text,
    name,
    gender,
    isActive,
    isOutgoing,
}) => {
    const chatPreviewClass = classNames({
        'chat-preview': true,
        'chat-preview_active': isActive,
    })

    if (text.length > 27) {
        text = text.substring(0, 27) + '...'
    }

    return (
        <div className={chatPreviewClass}>
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
