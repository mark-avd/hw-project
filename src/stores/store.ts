import { makeAutoObservable, runInAction } from 'mobx'
import { WS_CONNECTION_URL } from '../utils/api'
import { User } from '../utils/types'

class Store {
    person: User = { name: '', gender: '' }
    users: Array<User> = []
    chatId = -1

    constructor() {
        makeAutoObservable(this)
    }

    setPerson(person: User) {
        this.person = person
    }

    setChatId(chatId: number) {
        this.chatId = chatId
    }

    openMessages(id: number, name: string, gender: string) {
        this.chatId = id
        this.person = { name, gender }
    }

    //todo separate websocket service

    websocket() {
        const token: string | undefined = localStorage.getItem('token')?.slice(1, -1)
        const path = WS_CONNECTION_URL + '?type=test&ws_id=' + token
        const socketInstance = new WebSocket(path)

        if (token === undefined) {
            socketInstance.close()
            console.log('disconnected')
        }

        socketInstance.onopen = () => {
            console.log('opened')
            socketInstance.send(
                JSON.stringify({
                    type: 'users_list',
                })
            )
        }

        socketInstance.onmessage = (event: MessageEvent) => {
            const eventMessage = JSON.parse(event.data)
            runInAction(() => {
                if (eventMessage.data === "Get param 'ws_id' - is wrong! Please relogin!") {
                    localStorage.removeItem('connect_key')
                }
                if (eventMessage.type === 'users_list') {
                    this.users = eventMessage.data
                }
            })
        }

        socketInstance.onerror = (event: Event) => {
            console.error(event)
        }

        socketInstance.onclose = () => {
            localStorage.removeItem('token')
        }
    }
}

export const store = new Store()
