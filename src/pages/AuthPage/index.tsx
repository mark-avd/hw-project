import React, { useState } from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import LoginForm from '../../components/organisms/LoginForm'
import RegisterForm from '../../components/organisms/RegisterForm'
import { CAPTCHA_URL } from '../../utils/api'

interface AuthPage {
    handleToken: (token: string) => void
}

const AuthPage: React.FC<AuthPage> = ({ handleToken }) => {
    const [registerForm, setRegisterForm] = useState<boolean>(false)
    const renderRegisterForm = () => {
        setRegisterForm(true)
    }
    const renderLoginForm = () => {
        setRegisterForm(false)
    }
    return (
        <AuthTemplate>
            {registerForm ? (
                <RegisterForm captchaURL={CAPTCHA_URL} renderLoginForm={renderLoginForm} />
            ) : (
                <LoginForm captchaURL={CAPTCHA_URL} renderRegisterForm={renderRegisterForm} handleToken={handleToken} />
            )}
        </AuthTemplate>
    )
}

export default AuthPage
