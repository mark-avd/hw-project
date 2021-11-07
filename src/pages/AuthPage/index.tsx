import React, { useState } from 'react'
import LoginForm from '../../components/organisms/LoginForm'
import AuthTemplate from '../../components/templates/AuthTemplate'
import { CAPTCHA_URL } from '../../constants'
import RegisterForm from '../../components/organisms/RegisterForm'

const AuthPage: React.FC = () => {
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
                <LoginForm captchaURL={CAPTCHA_URL} renderRegisterForm={renderRegisterForm} />
            )}
        </AuthTemplate>
    )
}

export default AuthPage
