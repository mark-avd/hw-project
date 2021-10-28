import React from 'react'
import Text from '../../atoms/Text'
import classNames from 'classnames'
import './style.scss'

interface Bubble {
    text: string
    isIncoming: boolean
}

const Bubble: React.FC<Bubble> = ({ text, isIncoming }) => {
    const bubbleClass = classNames({
        bubble: true,
        bubble_incoming: isIncoming,
        bubble_outgoing: !isIncoming
    })

    return (
        <div className={bubbleClass}>
            <div className={'bubble__text'}>
                <Text text={text} />
            </div>
        </div>
    )
}

export default Bubble
