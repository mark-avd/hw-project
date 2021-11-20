import { WS_CONNECTION_URL } from './api'
import { runInAction } from 'mobx'
import { store } from '../stores/store'

class WebsocketInstance {
    socketInstance: null | WebSocket
    socketChat: null | WebSocket

    constructor() {
        this.socketInstance = null
        this.socketChat = null
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
            if (event.data === "Get param 'ws_id' - is wrong! Please relogin!") {
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

    disconnect(): void {
        this.socketInstance?.send(`${store.user?.name}_${store.user?.gender}_disconnected`)
        this.socketInstance?.close()
        localStorage.removeItem('token')
    }

    chatConnect(): void {
        const token: string | undefined = localStorage.getItem('token')?.slice(1, -1)
        if (store.user && store.person) {
            const namesArray: string[] = [store.user.name, store.person.name].sort()
            const connectionKey: string | undefined = namesArray.join('').toLowerCase()
            const path = WS_CONNECTION_URL + '?type=' + connectionKey + '&ws_id=' + token
            this.socketChat = new WebSocket(path)

            this.socketChat.onmessage = (event: MessageEvent) => {
                if (event.data === "Get param 'ws_id' - is wrong! Please relogin!") {
                    this.socketChat?.close(1000, 'Token expired.')
                    localStorage.removeItem('token')
                }
                const parsedEventData = JSON.parse(event.data.slice(1, -1))
                runInAction(() => {
                    if (parsedEventData.type === 'message') {
                        store.messages.push(parsedEventData)
                    }
                })

            }
            this.socketChat.onerror = (event: Event) => {
                console.error(event)
            }
        }
    }

    sendMessage(message: string): void {
        this.socketChat?.send(
            `'${ JSON.stringify({ type: 'message', senderId: store.user?.name, data: message })}'`
        )
        localStorage.setItem('messages', JSON.stringify(store.messages))
    }

    websocketSendType(type: string): void {
        this.socketInstance?.send(
            JSON.stringify({
                type: type,
            })
        )
    }


}

export const websocketInstance = new WebsocketInstance()
