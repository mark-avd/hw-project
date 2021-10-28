import React from 'react'
import './style.scss'

interface Text2 {
    text: string
}

const Text2: React.FC<Text2> = ({ text }) => {
    return <p className={'text2'}>{text}</p>
}

export default Text2
