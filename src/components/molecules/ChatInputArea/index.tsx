import React, { ChangeEvent, useState } from 'react'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import { websocketInstance } from '../../../utils/websocket'
import './style.scss'

const ChatInputArea: React.FC = () => {
    const [messageText, setMessageText] = useState<string>('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setMessageText(event.target.value)
    }
    const handleSend = () => {
        if (messageText.length === 0) {
            return false
        }
        websocketInstance.sendMessage(messageText)
    }
    return (
        <div className={'chat-input-area'}>
            <div className={'chat-input-area__attachment-icon'}>
                <Icon type={'attachment'} />
            </div>
            <div className={'chat-input-area__input'}>
                <Input
                    name={'chatTextArea'}
                    placeholder={'Write something...'}
                    type={'text'}
                    noBorder={true}
                    onChange={handleChange}
                />
            </div>
            <div className={'chat-input-area__send-icon'} onClick={handleSend}>
                <Icon type={'send'} />
            </div>
        </div>
    )
}

export default ChatInputArea
