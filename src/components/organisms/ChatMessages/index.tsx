import React, { useEffect } from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Bubble from '../../molecules/Bubble'
import { store } from '../../../stores/store'
import './style.scss'

interface ChatMessage {
    chatId?: number
}

const ChatMessages: React.FC<ChatMessage> = () => {
    return (
        <div className={'chat-messages'}>
            {store.messages.map(({ data, senderId }) => {
                const messageAreaClass = classNames({
                    'chat-messages__message-area': true,
                    'chat-messages__message-area_outgoing': senderId === store.user?.name,
                    'chat-messages__message-area_incoming': senderId === store.person?.name,
                })
                const randomNum: string = Math.floor(Math.random() * 1000).toString()
                const key: string = senderId + randomNum
                // todo focus on last message through useRef
                return (
                    <div className={messageAreaClass} key={key}>
                        <Bubble text={data} isIncoming={senderId === store.person?.name} />
                    </div>
                )
            })}
        </div>
    )
}

export default observer(ChatMessages)
