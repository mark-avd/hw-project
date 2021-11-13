import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Redirect } from 'react-router-dom'
import ChatTemplate from '../../components/templates/ChatTemplate'
import { store } from '../../stores/store'

const ChatPage: React.FC = () => {
    useEffect(() => {
        store.websocket()
    }, [])

    return (
        <>
            <ChatTemplate />
            {store.isSignOut && <Redirect to={'/'} />}
        </>
    )
}

export default observer(ChatPage)
