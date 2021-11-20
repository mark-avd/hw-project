import React from 'react'
import Text from '../../atoms/Text'
import classNames from 'classnames'
import './style.scss'
import { FileType } from '../../../utils/types'

interface Bubble {
    text: string
    isIncoming: boolean
    file: FileType | undefined
}

const Bubble: React.FC<Bubble> = ({ text, isIncoming, file }) => {
    const bubbleClass = classNames({
        bubble: true,
        bubble_incoming: isIncoming,
        bubble_outgoing: !isIncoming,
    })

    return (
        <div className={bubbleClass}>
            <div className={'bubble__text'}>
                <Text text={text} />
                <p>
                    {file?.name}
                    {file?.url}
                    {file?.size}
                </p>
            </div>
        </div>
    )
}

export default Bubble
