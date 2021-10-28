import React from 'react'
import Input from '../../atoms/Input'
import SendIcon from '../../atoms/SendIcon'
import './style.scss'
import AttachmentIcon from '../../atoms/AttachmentIcon'

const ChatInputArea: React.FC = () => {
    return (
        <div className={'chat-input-area'}>
            <div className={'chat-input-area__attachment-icon'}>
                <AttachmentIcon />
            </div>
            <div className={'chat-input-area__input'}>
                <Input
                    name={'chatTextArea'}
                    placeholder={'Write something...'}
                    type={'text'}
                    noBorder={true}
                />
            </div>
            <div className={'chat-input-area__send-icon'}>
                <SendIcon />
            </div>
        </div>
    )
}

export default ChatInputArea
