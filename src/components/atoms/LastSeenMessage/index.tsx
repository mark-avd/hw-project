import React from 'react'
import './style.scss'

interface LastSeenMessage {
    timePassed: string
}

const LastSeenMessage: React.FC<LastSeenMessage> = ({ timePassed }) => {
    return <p className={'last-seen-message'}>Last seen {timePassed} ago</p>
}

export default LastSeenMessage
