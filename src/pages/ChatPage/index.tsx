import React, { useEffect, useState } from 'react'
import ChatTemplate from '../../components/templates/ChatTemplate'
import ChatHeader from '../../components/molecules/ChatHeader'
import { Redirect } from 'react-router-dom'
import { WS_CONNECTION_URL } from '../../utils/api'
import { User } from '../../utils/types'

const connectKey: string | undefined = localStorage.getItem('connect_key')?.slice(1, -1)
const websocket = new WebSocket(WS_CONNECTION_URL + '?type=test&ws_id=' + connectKey)

const getUsersRequest = {
    type: 'users_list',
}

const ChatPage: React.FC = () => {
    const [isSignOut, setSignOut] = useState<boolean>(false)
    const [messageData, setMessageData] = useState<MessageEvent>()
    const [users, setUsers] = useState<Array<User>>([])

    const [chatId, setChatId] = useState<number>(-1)
    const [companion, setCompanion] = useState<User>({ name: '', gender: '' })
    const [isHeaderHidden, setHeaderHidden] = useState<boolean>(false)

    useEffect(() => {
        websocket.onmessage = (msg) => {
            if (msg.data !== "Get param 'ws_id' - is wrong! Please relogin!") {
                setMessageData(JSON.parse(msg.data))
            }
            if (msg.data === "Get param 'ws_id' - is wrong! Please relogin!") {
                setSignOut(true)
                localStorage.removeItem('connect_key')
            }
        }
        websocket.onopen = () => {
            websocket.send(JSON.stringify(getUsersRequest))
        }
        websocket.onclose = () => {
            localStorage.removeItem('connect_key')
        }
        websocket.onerror = (msg) => {
            console.error(msg)
        }
        if (messageData) {
            if (messageData.type === 'users_list') {
                setUsers(messageData.data)
            }
        }
    }, [messageData])

    const closeConnection = (): void => websocket.close()

    const handleChat = (id: number, name: string, gender: string) => {
        setChatId(id)
        setCompanion({ name, gender })
    }
    const hideHeader = (hide: boolean) => {
        hide && setHeaderHidden(true)
        !hide && setHeaderHidden(false)
    }
    return (
        <>
            {!isHeaderHidden && <ChatHeader closeConnection={closeConnection} />}
            <ChatTemplate
                handleChat={handleChat}
                companion={companion}
                chatId={chatId}
                hideHeader={hideHeader}
                users={users}
            />
            {isSignOut && <Redirect to={'/'} />}
        </>
    )
}

export default ChatPage
