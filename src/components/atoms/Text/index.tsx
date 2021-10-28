import React from 'react'

interface Text {
    text: string
}

const Text: React.FC<Text> = ({ text }) => {
    return <p>{text}</p>
}

export default Text
