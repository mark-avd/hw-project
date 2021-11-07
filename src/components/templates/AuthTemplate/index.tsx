import React from 'react'
import './style.scss'

const AuthTemplate: React.FC = ({ children }) => {
    return (
        <div className={'auth'}>
            <div className={'auth__form'}>{children}</div>
            <div className={'auth__background'} />
        </div>
    )
}

export default AuthTemplate
