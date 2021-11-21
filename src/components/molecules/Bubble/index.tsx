import React from 'react'
import Text from '../../atoms/Text'
import classNames from 'classnames'
import './style.scss'
import { FileType } from '../../../utils/types'
import Icon from '../../atoms/Icon'
import { openInNewTab } from '../../../utils/utils'

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

    const handleClick = () => {
        if (file) {
            file.url && openInNewTab(file.url)
        }
    }

    return (
        <div className={bubbleClass}>
            <div className={'bubble__text'}>
                <Text text={text} />
            </div>
            {file && (
                <div className={'bubble__file'} onClick={handleClick}>
                    <Icon type={'file'}/>
                    <div className={'bubble__file-info'}>
                        <p className={'bubble__file-name'}>{file.name}</p>
                        <Text text={((file?.size / 1024) / 1024).toString().slice(0, 4) + ' MB'} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Bubble
