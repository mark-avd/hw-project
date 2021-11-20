import { WS_CONNECTION_URL } from './api'
import { runInAction } from 'mobx'
import { store } from '../stores/store'

class WebsocketInstance {
    socketInstance: null | WebSocket

    constructor() {
        this.socketInstance = null
    }

    connect() {
        const token: string | undefined = localStorage.getItem('token')?.slice(1, -1)
        const path = WS_CONNECTION_URL + '?type=mark&ws_id=' + token
        this.socketInstance = new WebSocket(path)

        this.socketInstance.onopen = () => {
            this.websocketSendType('users_list')
            this.websocketSendType('user_data')
        }

        this.socketInstance.onmessage = (event: MessageEvent) => {
            const eventData = event.data
            if (eventData === "Get param 'ws_id' - is wrong! Please relogin!") {
                this.socketInstance?.close(1000, 'Token expired.')
                localStorage.removeItem('token')
            }
            runInAction(() => {
                if (eventData.includes('user_data')) {
                    store.user = JSON.parse(eventData).data
                    this.socketInstance?.send(`${store.user?.name}_${store.user?.gender}_connected`)
                }
                if (eventData.includes('users_list')) {
                    store.users = JSON.parse(eventData).data
                }
            })
            if (eventData.includes('_connected')) {
                if (!eventData.includes(`${store.user?.name}_${store.user?.gender}`)) {
                    this.websocketSendType('users_list')
                }
            }
            if (eventData.includes('_disconnected')) {
                this.websocketSendType('users_list')
            }
        }

        this.socketInstance.onerror = (event: Event) => {
            console.error(event)
        }

        this.socketInstance.onclose = () => {
            //
        }
    }

    sendMessage(message: string) {
        // const messageRequest = {
        //     type: 'message',
        //     data: [{ senderName: store.user?.name, message }],
        // }
        this.socketInstance?.send(
            `{ "type": "message", "senderId": ${store.user?.name}, "data": ${message} }`
        )
        // this.socketInstance?.send(JSON.stringify(messageRequest))
        console.log('send')
    }

    websocketSendType(type: string) {
        this.socketInstance?.send(
            JSON.stringify({
                type: type,
            })
        )
    }

    disconnect() {
        this.socketInstance?.send(`${store.user?.name}_${store.user?.gender}_disconnected`)
        this.socketInstance?.close()
        localStorage.removeItem('token')
    }
}

export const websocketInstance = new WebsocketInstance()
