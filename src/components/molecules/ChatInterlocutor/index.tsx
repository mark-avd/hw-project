import React from 'react'
import LastSeenMessage from '../../atoms/LastSeenMessage'
import './style.scss'

const ChatInterlocutor: React.FC = () => {
    return (
        <div className={'chat-interlocutor'}>
            <h3>Van Darkholme</h3>
            <LastSeenMessage timePassed={'3 minutes'} />
        </div>
    )
}

export default ChatInterlocutor
