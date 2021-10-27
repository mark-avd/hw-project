import React from 'react'
import './style.scss'

const LoginScreen: React.FC = (props) => {
    return (
        <>
            <div className={'login-screen'}>
                <div className={'login-screen__form'}>
                    {props.children}
                </div>
                <div className={'login-screen__graphics'}>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
