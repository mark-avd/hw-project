import React from 'react'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import './style.scss'

const ChatInputArea: React.FC = () => {
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
                />
            </div>
            <div className={'chat-input-area__send-icon'}>
                <Icon type={'send-icon'} />
            </div>
        </div>
    )
}

export default ChatInputArea
