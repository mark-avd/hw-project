import React, { useEffect, useState } from 'react'
import ChatTemplate from '../../components/templates/ChatTemplate'
import ChatHeader from '../../components/molecules/ChatHeader'
import { WS_CONNECTION_URL } from '../../api'

const websocket = new WebSocket(
    WS_CONNECTION_URL + '?type=test&ws_id=' + localStorage.getItem('connect_key')?.slice(1, -1)
)
const getUsersMessage = {
    type: 'users_list',
}

const ChatPage: React.FC = () => {
    const [messageData, setMessageData] = useState<any>()
    const [users, setUsers] = useState<[]>()

    const [chatId, setChatId] = useState<number>(-1)
    const [companionName, setCompanionName] = useState<string>('')
    const [isHeaderHidden, setHeaderHidden] = useState<boolean>(false)

    useEffect(() => {
        websocket.onmessage = (msg) => {
            setMessageData(JSON.parse(msg.data))
        }
        websocket.onopen = () => {
            console.log('connected')
            websocket.send(JSON.stringify(getUsersMessage))
        }
        websocket.onclose = () => {
            console.log('disconnected')
        }
        websocket.onerror = (msg) => {
            console.log(msg)
        }
        if (messageData) {
            if (messageData.type === 'users_list') {
                setUsers(messageData.data)
                console.log(users)
            }
        }
    }, [messageData])


    const handleChat = (id: number, name: string) => {
        setChatId(id)
        setCompanionName(name)
    }
    const hideHeader = (hide: boolean) => {
        hide && setHeaderHidden(true)
        !hide && setHeaderHidden(false)
    }
    return (
        <>
            {!isHeaderHidden && <ChatHeader />}
            <ChatTemplate
                handleChat={handleChat}
                companionName={companionName}
                chatId={chatId}
                hideHeader={hideHeader}
                users={users}
            />
        </>
    )
}

export default ChatPage
