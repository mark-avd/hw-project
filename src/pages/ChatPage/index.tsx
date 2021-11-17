import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import ChatTemplate from '../../components/templates/ChatTemplate'
import { store } from '../../stores/store'

const ChatPage: React.FC = () => {
    useEffect(() => {
        store.websocket()
    }, [])

    return <ChatTemplate />
}

export default observer(ChatPage)
