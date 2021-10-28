import React from 'react'
import LoginForm from '../../components/organisms/LoginForm'
import LoginTemplate from '../../components/templates/LoginTemplate'

const LoginPage: React.FC = () => {
    return (
        <LoginTemplate>
            <LoginForm />
        </LoginTemplate>
    )
}

export default LoginPage
