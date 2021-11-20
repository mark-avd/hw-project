import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import ChatTemplate from '../../components/templates/ChatTemplate'
import { websocketInstance } from '../../utils/websocket'

const ChatPage: React.FC = () => {
    useEffect(() => {
        websocketInstance.connect()
    }, [])

    return <ChatTemplate />
}

export default observer(ChatPage)
