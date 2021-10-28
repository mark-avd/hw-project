import React from 'react'
import classNames from 'classnames'
import Bubble from '../../molecules/Bubble'
import { mockMessages } from '../../../mockMessages'
import './style.scss'

const ChatMessages: React.FC = () => {
    return (
        <div className={'chat-messages'}>
            {mockMessages.map(({ id, text, senderId }) => {
                const messageAreaClass = classNames({
                    'chat-messages__message-area': true,
                    'chat-messages__message-area_outgoing': senderId === 0,
                    'chat-messages__message-area_incoming': senderId !== 0,
                })

                // todo focus on last message through useRef

                return (
                    <div className={messageAreaClass} key={id}>
                        <Bubble text={text} isIncoming={senderId !== 0} />
                    </div>
                )
            })}
        </div>
    )
}

export default ChatMessages