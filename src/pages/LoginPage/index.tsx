import React from 'react'
import LoginScreen from '../../components/templates/LoginScreen'
import LoginForm from '../../components/organisms/LoginForm'
import './style.scss'

const LoginPage: React.FC = () => {
    return (
        <>
            <LoginScreen>
                <LoginForm />
            </LoginScreen>
        </>
    )
}

export default LoginPage
