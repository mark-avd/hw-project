import { useState } from 'react'

interface UseTokenInterface {
    setToken: (userToken: string) => void
    token: string | undefined
}

const useToken = (): UseTokenInterface => {
    const getToken = (): string | undefined => {
        return localStorage.getItem('token')?.slice(1, -1)
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (userToken: string): void => {
        localStorage.setItem('token', userToken)
        setToken(userToken)
    }

    return {
        setToken: saveToken,
        token,
    }
}

export default useToken
