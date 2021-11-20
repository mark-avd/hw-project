export type UserType = {
    name: string
    gender: string
}

export interface LoginFormInterface {
    login: string
    password: string
    captcha: string
}

export interface RegisterFormInterface extends LoginFormInterface {
    password_confirm: string
    name: string
    gender_id: number
}

export interface MessageInterface {
    type: 'message'
    senderId: string
    text: string
    file: FileType | undefined
}

export type FileType = {
    name: string
    size: number
    url: string | undefined
}
