const WS = 'ws://'
const WS_PORT = ':2346/'
const HTTP = 'http://'
const HTTP_PORT = ':93/'
const URL = '109.194.37.212'
const CAPTCHA = 'api/auth/captcha'
const GENDERS = 'api/auth'
const AUTH = 'api/auth/login'
const REGISTRATION = 'api/auth/register'
export const CAPTCHA_URL = HTTP + URL + HTTP_PORT + CAPTCHA
export const GENDERS_URL = HTTP + URL + HTTP_PORT + GENDERS
export const AUTH_URL = HTTP + URL + HTTP_PORT + AUTH
export const REGISTRATION_URL = HTTP + URL + HTTP_PORT + REGISTRATION
export const WS_CONNECTION_URL = WS + URL + WS_PORT

export const fetchData = async (url: string) => {
    const response = await fetch(url)
    if (response.ok) {
        return response
    }
}

export const postRequest = async (data: FormData, url: string, action?: () => void) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,
        credentials: 'same-origin',
    })
    if (response.status === 200) {
        action && action()
        console.log(await response.text())
    }
    if (response.status === 400) {
        console.error(await response.text())
    }
}
