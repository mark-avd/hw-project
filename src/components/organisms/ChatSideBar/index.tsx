import React, { Dispatch, SetStateAction } from 'react'
import ChatPreview from '../../molecules/ChatPreview'
import { mockChats } from '../../../mockChats'
import './style.scss'

interface ChatSideBar {
    setChatId: Dispatch<SetStateAction<number>>
    setCompanionName: Dispatch<SetStateAction<string>>
    isActive?: boolean
}

const ChatSideBar: React.FC<ChatSideBar> = ({ setChatId, setCompanionName }) => {

    return (
        <div className={'chat-sidebar'}>
            {mockChats.map(({ name, id }) => (
                <ChatPreview
                    key={id}
                    id={id}
                    name={name}
                    text={'I\'ll show you who\'s the boss of this gym.'}
                    gender={'male'}
                    isActive={false}
                    isOutgoing={true}
                    setChatId={setChatId}
                    setCompanionName={setCompanionName}
                />
            ))}
        </div>
    )
}

export default ChatSideBar
