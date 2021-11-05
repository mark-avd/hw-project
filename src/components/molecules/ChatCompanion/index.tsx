import React from 'react'
import LastSeenMessage from '../../atoms/LastSeenMessage'
import Icon from '../../atoms/Icon'
import './style.scss'

interface ChatCompanion {
    companionName: string
    closeMessages: () => void
}

const ChatCompanion: React.FC<ChatCompanion> = ({ companionName, closeMessages }) => {
    return (
        <div className={'chat-companion'}>
            {window.innerWidth <= 600 && (
                <div className={'chat-companion__mobile'}>
                    <span
                        className={'chat-companion__icon chat-companion__back-icon'}
                        onClick={closeMessages}
                    >
                        <Icon type={'arrow-back-icon'} />
                    </span>
                    <span className={'chat-companion__icon'}>
                        <Icon type={'user-male'} />
                    </span>
                </div>
            )}
            <div className={'chat-companion__main'}>
                <h3>{companionName}</h3>
                <LastSeenMessage timePassed={'3 minutes'} />
            </div>
        </div>
    )
}

export default ChatCompanion
