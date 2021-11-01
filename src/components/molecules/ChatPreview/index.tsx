import React from 'react'
import classNames from 'classnames'
import Icon from '../../atoms/Icon'
import Text2 from '../../atoms/Text2'
import './style.scss'

interface ChatPreview {
    id: number
    name: string
    text: string
    gender?: string
    isActive: boolean
    isOutgoing: boolean
    handleChat: (id: number, name: string) => void
}

const ChatPreview: React.FC<ChatPreview> = ({
    id,
    text,
    name,
    isOutgoing,
    handleChat,
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
                handleChat(id, name)
            }}
        >
            <div className={'chat-preview__user-icon'}>
                <Icon type={'user-male'} />
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
