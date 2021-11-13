import React from 'react'
import { observer } from 'mobx-react-lite'
import ChatPreview from '../../molecules/ChatPreview'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import { store } from '../../../stores/store'
import './style.scss'

const ChatSideBar: React.FC = () => {
    const users = store.users
    return (
        <div className={'chat-sidebar'}>
            {!users || users.length === 0 ? (
                <NoChatsMessage />
            ) : (
                users.map(({ name, gender }, index) => (
                    <ChatPreview
                        key={index}
                        id={index}
                        name={name}
                        gender={gender}
                        chatId={store.chatId}
                        text={"I'll show you who's the boss of this gym."}
                        isOutgoing={true}
                    />
                ))
            )}
        </div>
    )
}

export default observer(ChatSideBar)
