import React from 'react'
import './style.scss'

const LoginTemplate: React.FC = ({ children }) => {
    return (
        <div className={'login-screen'}>
            <div className={'login-screen__form'}>
                {children}
            </div>
            <div className={'login-screen__background'}>
            </div>
        </div>
    )
}

export default LoginTemplate
