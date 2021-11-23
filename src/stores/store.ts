import { makeAutoObservable } from 'mobx'
import { FileType, MessageInterface, UserType } from '../utils/types'

class Store {
    selectedChat: number | undefined
    user: UserType | undefined
    person: UserType | undefined
    outFile: FileType | undefined

    users: Array<UserType> = []
    messages: Array<MessageInterface> = []

    constructor() {
        makeAutoObservable(this)
    }

    openMessages(chatId: number, name: string, gender: string): void {
        this.selectedChat = chatId
        this.person = { name, gender }
    }

    closeMessages(): void {
        this.selectedChat = undefined
        this.person = undefined
    }

    addMessageToStore(message: MessageInterface) {
        this.messages.push(message)
    }

    setMessagesStore(messages: Array<MessageInterface>) {
       this.messages = messages
    }

    saveMessagesLocalStore() {
        localStorage.setItem('messages', JSON.stringify(store.messages))
    }

}

export const store = new Store()
