import React, { useRef } from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Bubble from '../../molecules/Bubble'
import { store } from '../../../stores/store'
import './style.scss'

const ChatMessages: React.FC = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    return (
        <div className={'chat-messages'}>
            {store.messages.map(({ text, senderId, file, date }) => {
                const messageAreaClass = classNames({
                    'chat-messages__message-area': true,
                    'chat-messages__message-area_outgoing': senderId === store.user?.name,
                    'chat-messages__message-area_incoming': senderId === store.person?.name,
                })
                const key: string = senderId + date
                // todo somehow fix focus on last message
                return (
                    <div className={messageAreaClass} key={key}>
                        <Bubble
                            text={text}
                            isIncoming={senderId === store.person?.name}
                            file={file}
                        />
                    </div>
                )
            })}
            <div ref={messagesAnchorRef} />
        </div>
    )
}

export default observer(ChatMessages)
