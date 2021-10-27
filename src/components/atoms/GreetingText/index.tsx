import React from 'react'
import './style.scss'

const GreetingText: React.FC = () => {
    return (
        <h1 className={'heading'}>
            Welcome to
            <span className={'heading__app-name'}> Chatty</span>
            <span className={'heading__exclamation-mark'}>!</span>
        </h1>
    )
}

export default GreetingText
