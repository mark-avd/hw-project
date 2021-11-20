import { makeAutoObservable } from 'mobx'
import { UserType } from '../utils/types'

class Store {
    user: UserType | undefined
    person: UserType | undefined
    users: Array<UserType> = []
    selectedChat: number | undefined

    messages = []

    constructor() {
        makeAutoObservable(this)
    }

    openMessages(chatId: number, name: string, gender: string): void {
        this.selectedChat = chatId
        this.person = { name, gender }
    }

}

export const store = new Store()
