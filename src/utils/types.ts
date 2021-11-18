export interface User {
    name: string
    gender: string
}

export interface ILoginForm {
    login: string
    password: string
    captcha: string
}

export interface IRegisterForm extends ILoginForm {
    password_confirm: string
    name: string
    gender_id: number
}
