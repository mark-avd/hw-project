import React from 'react'
import LastSeenMessage from '../../atoms/LastSeenMessage'
import './style.scss'

interface ChatInterlocutor {
    companionName: string
}

const ChatInterlocutor: React.FC<ChatInterlocutor> = ({ companionName }) => {
    return (
        <div className={'chat-interlocutor'}>
            <h3>{companionName}</h3>
            <LastSeenMessage timePassed={'3 minutes'} />
        </div>
    )
}

export default ChatInterlocutor
