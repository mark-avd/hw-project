import React from 'react'
import './style.scss'
import ChatPreview from '../../molecules/ChatPreview'

const ChatSideBar: React.FC = () => {
    return (
        <div className={'chat-sidebar'}>
            <ChatPreview
                name={'Van Darkholme'}
                text={'I\'ll show you who\'s the boss of this gym.'}
                gender={'male'}
                isActive={true}
                isOutgoing={true}
            />
            <ChatPreview
                name={'Billy Harington'}
                text={'Hey you!'}
                gender={'male'}
                isActive={false}
                isOutgoing={false}
            />
        </div>
    )
}

export default ChatSideBar
