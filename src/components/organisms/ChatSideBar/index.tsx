import React from 'react'
import { observer } from 'mobx-react-lite'
import ChatPreview from '../../molecules/ChatPreview'
import NoChatsMessage from '../../molecules/NoChatsMessage'
import { store } from '../../../stores/store'
import './style.scss'

const ChatSideBar: React.FC = () => {
    return (
        <div className={'chat-sidebar'}>
            {!store.users || store.users.length === 1 ? (
                <NoChatsMessage />
            ) : (
                store.users.map(({ name, gender }, index: number) => {
                    const randomNum: string = Math.floor(Math.random() * 1000).toString()
                    const key: string = name + randomNum + gender
                    if (name !== store.user?.name){
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
