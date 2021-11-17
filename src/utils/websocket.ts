import { WS_CONNECTION_URL } from './api'
import { runInAction } from 'mobx'

type RequestType = {
    type: string
}

class WebsocketInstance {
    connectKey: string | undefined = localStorage.getItem('connect_key')?.slice(1, -1)
    store?: []
    isSignOut?: boolean
    requestType?: RequestType

    constructor(store?: [], isSignOut?: boolean, requestType?: RequestType) {
        this.store = store
        this.isSignOut = isSignOut
        this.requestType = requestType
    }

    connect() {
        const path = WS_CONNECTION_URL + '?type=test&ws_id=' + this.connectKey
        const socketInstance = new WebSocket(path)

        if (this.isSignOut) {
            socketInstance.close()
        }

        socketInstance.onopen = () => {
            console.log('opened')
            socketInstance.send(
                JSON.stringify(this.requestType)
            )
        }

        socketInstance.onmessage = (event: MessageEvent) => {
            const eventMessage = JSON.parse(event.data)
            runInAction(() => {
                if (eventMessage.data === "Get param 'ws_id' - is wrong! Please relogin!") {
                    localStorage.removeItem('connect_key')
                    this.isSignOut = true
                }
                if (eventMessage.type === 'users_list') {
                    const users = eventMessage.data
                }
            })
        }

        socketInstance.onerror = (event: Event) => {
            console.error(event)
        }

        socketInstance.onclose = () => {
            localStorage.removeItem('connect_key')
        }
    }
}

// export const websocketInstance = new WebSocket()
export  {}