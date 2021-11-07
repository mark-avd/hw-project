import React from 'react'
import './style.scss'

interface GreetingText {
    greeting: string
}

const GreetingText: React.FC<GreetingText> = ({ greeting }) => {
    return (
        <h1 className={'heading'}>
            {greeting}
            <span className={'heading__app-name'}> Chatty</span>
            <span className={'heading__exclamation-mark'}>!</span>
        </h1>
    )
}

export default GreetingText
