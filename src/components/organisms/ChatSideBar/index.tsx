import React from 'react'
import { observer } from 'mobx-react-lite'
import ChatPreview from '../../molecules/ChatPreview'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import { store } from '../../../stores/store'
import './style.scss'

const ChatSideBar: React.FC = () => {
    const handleSidebarClick = (): void => {
        store.closeMessages()
    }

    return (
        <div className={'chat-sidebar'} onClick={handleSidebarClick}>
            {!store.users || store.users.length === 1 ? (
                <NoChatsMessage />
            ) : (
                store.users.map(({ name, gender }, index: number) => {
                    if (name !== store.user?.name) {
                        const key = name + gender + index
                        return (
                            <ChatPreview
                                key={key}
                                chatId={index}
                                name={name}
                                gender={gender}
                                selectedChat={store.selectedChat}
                                text={"I'll show you who's the boss of this gym."}
                                isOutgoing={true}
                            />
                        )
                    }
                })
            )}
        </div>
    )
}

export default observer(ChatSideBar)
